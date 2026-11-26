"use client";

import React, { useEffect, useRef } from "react";
type Props = {
  speed?: number; // 1 = default, 0.5 = slower, 2 = faster, 0 = paused
  overlayOpacity?: number; // 0 = no overlay, 1 = fully covered
  overlayColor?: string; // any CSS color, e.g. "#000" or "rgb(0,0,0)"
};
export default function HeroWaveCanvas({
  speed = 1,
  overlayOpacity = 0,
  overlayColor = "#000000",
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // Refs so changing props doesn't restart WebGL
  const speedRef = useRef(speed);
  const overlayOpacityRef = useRef(overlayOpacity);
  const overlayColorRef = useRef(overlayColor);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);
  useEffect(() => {
    overlayOpacityRef.current = overlayOpacity;
  }, [overlayOpacity]);
  useEffect(() => {
    overlayColorRef.current = overlayColor;
  }, [overlayColor]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const hero = canvas.parentElement;
    if (!hero) return;

    const gl = canvas.getContext("webgl", {
      premultipliedAlpha: false,
      antialias: true,
      alpha: true,
    });
    if (!gl) return;

    const VERT = `
      attribute vec2 a_pos;
      void main() {
        gl_Position = vec4(a_pos, 0.0, 1.0);
      }
    `;

    const FRAG = `
      precision highp float;
      uniform vec3 u_overlayColor;
uniform float u_overlayOpacity;
      uniform vec2 u_res;
      uniform float u_time;
      uniform vec3 u_color;

      float flagWave(vec2 p, float t) {
        float w1 = sin(p.x * 2.8 + p.y * 1.0 - t * 0.9) * 0.65;
        float w2 = sin(p.x * 5.2 - p.y * 1.5 - t * 1.1) * 0.30;
        float w3 = sin(p.x * 7.5 + p.y * 2.2 - t * 0.8) * 0.12;
        return w1 + w2 + w3;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_res.xy;
        uv.y = 1.0 - uv.y;
        vec2 p = uv;
        p.x *= u_res.x / u_res.y;

        float t = u_time * 0.22;

        float eps = 0.005;
        float h = flagWave(p, t);
        float hx = flagWave(p + vec2(eps, 0.0), t);
        float hy = flagWave(p + vec2(0.0, eps), t);
        vec3 normal = normalize(vec3(-(hx - h) / eps, -(hy - h) / eps, 1.25));

        vec3 lightDir = normalize(vec3(0.5, 0.85, 1.4));
        float diffuse = dot(normal, lightDir);

        vec3 viewDir = vec3(0.0, 0.0, 1.0);
        vec3 reflectDir = reflect(-lightDir, normal);
        float spec = pow(max(dot(reflectDir, viewDir), 0.0), 16.0) * 0.35;

        vec3 colBase = u_color;
        vec3 colShadow = u_color * 0.76;
        vec3 colHighlight = mix(u_color, vec3(1.0), 0.35);

        vec3 color = mix(colShadow, colBase, smoothstep(-0.6, 0.2, h));
        color = mix(color, colHighlight, smoothstep(0.1, 0.75, h));

        color *= (0.74 + 0.36 * diffuse);
        color += vec3(spec);

        gl_FragColor = vec4(color, 1.0);
        color = mix(color, u_overlayColor, u_overlayOpacity);
gl_FragColor = vec4(color, 1.0);
      }
    `;

    function createShader(type: number, source: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, source);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn(gl.getShaderInfoLog(s));
        gl.deleteShader(s);
        return null;
      }
      return s;
    }

    const vs = createShader(gl.VERTEX_SHADER, VERT);
    const fs = createShader(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const quadBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uColor = gl.getUniformLocation(prog, "u_color");
    const uOverlayColor = gl.getUniformLocation(prog, "u_overlayColor");
    const uOverlayOpacity = gl.getUniformLocation(prog, "u_overlayOpacity");

    function parseColor(str: string): [number, number, number] {
      if (typeof document === "undefined") return [0.5, 0.46, 0.92];
      const clean = str.trim() || "#8077EC";
      // Fast path for 6-digit hex to avoid DOM reflow
      if (clean.startsWith("#") && clean.length === 7) {
        const r = parseInt(clean.slice(1, 3), 16) / 255;
        const g = parseInt(clean.slice(3, 5), 16) / 255;
        const b = parseInt(clean.slice(5, 7), 16) / 255;
        if (!isNaN(r) && !isNaN(g) && !isNaN(b)) return [r, g, b];
      }
      try {
        const dummy = document.createElement("div");
        dummy.style.color = clean;
        document.body.appendChild(dummy);
        const comp = getComputedStyle(dummy).color;
        document.body.removeChild(dummy);
        const match = comp.match(/\d+/g);
        if (match && match.length >= 3) {
          return [
            Number(match[0]) / 255,
            Number(match[1]) / 255,
            Number(match[2]) / 255,
          ];
        }
      } catch {
        /* fallback */
      }
      return [0.502, 0.467, 0.925];
    }

    let lastColorStr = "";
    function updateColor() {
      if (!gl) return;
      const primary =
        getComputedStyle(document.documentElement).getPropertyValue(
          "--primary",
        ) || "#8077EC";
      if (primary === lastColorStr) return;
      lastColorStr = primary;
      const [r, g, b] = parseColor(primary);
      gl.uniform3f(uColor, r, g, b);
    }

    function resize() {
      if (!gl || !canvas || !hero) return;
      const isMobile = window.innerWidth < 768;
      const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);
      const width = hero.clientWidth;
      const height = hero.clientHeight;
      const w = Math.max(1, Math.floor(width * dpr));
      const h = Math.max(1, Math.floor(height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uRes, w, h);
      updateColor();
    }

    resize();
    window.addEventListener("resize", resize);

    let isVisible = true;
    let animationId: number | null = null;

    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
      if (isVisible && !animationId) {
        lastNow = performance.now(); // <-- the new line goes here
        animationId = requestAnimationFrame(render);
      } else if (!isVisible && animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    });
    observer.observe(hero);

    let frameCount = 0;
    let lastNow = performance.now();
    let animTime = 0;

    function render(now: number) {
      if (!isVisible || !gl) {
        animationId = null;
        return;
      }

      const dt = (now - lastNow) / 1000;
      lastNow = now;
      animTime += dt * speedRef.current;

      if (++frameCount % 30 === 0) updateColor();

      gl.uniform1f(uTime, animTime);

      const [or, og, ob] = parseColor(overlayColorRef.current);
      gl.uniform3f(uOverlayColor, or, og, ob);
      gl.uniform1f(uOverlayOpacity, overlayOpacityRef.current);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationId = requestAnimationFrame(render);
    }
    animationId = requestAnimationFrame(render);
    return () => {
      window.removeEventListener("resize", resize);
      observer.disconnect();
      if (animationId) cancelAnimationFrame(animationId);
      if (quadBuf) gl.deleteBuffer(quadBuf);
      if (prog) gl.deleteProgram(prog);
      if (vs) gl.deleteShader(vs);
      if (fs) gl.deleteShader(fs);
    };
  }, []);

  return (
    <canvas
      id="hero-waves"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{
        borderRadius: "0 0 50% 50% / 0 0 9vw 9vw",
      }}
    />
  );
}
