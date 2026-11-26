import React from "react";
import Image from "next/image";

export interface FeatureTestimonialProps {
  featureName?: string;
  metricBadge?: string;
  metricHighlight?: string;
  quote: string;
  authorName?: string;
  authorRole: string;
  companyName: string;
  businessScale?: string;
  gradientAccent?: string;
  avatarSrc?: string;
}

export default function FeatureTestimonialCard({
  quote,
  authorRole,
  companyName,
  authorName = "Himanshu Dhammeriya",
  avatarSrc = "/testimonials/himanshu.jpg",
}: FeatureTestimonialProps) {
  const authorSubtitle = companyName
    ? `${authorRole} at ${companyName}`
    : authorRole;

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-14 xl:gap-16">
          {/* Left Column: Opening Quote Mark & Wide Proportional Quote */}
          <div className="flex-1 min-w-0">
            {/* Opening quotation mark icon matching the reference design */}
            <div className="mb-5 sm:mb-6 text-neutral-950">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-950 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M10 7c0-2.209-1.791-4-4-4S2 4.791 2 7c0 1.488.81 2.784 2 3.486V15c0 1.657 1.343 3 3 3h1v-2H7c-.552 0-1-.448-1-1v-4.514C8.79 9.784 10 8.488 10 7zm12 0c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 1.488.81 2.784 2 3.486V15c0 1.657 1.343 3 3 3h1v-2h-1c-.552 0-1-.448-1-1v-4.514C20.79 9.784 22 8.488 22 7z" />
              </svg>
            </div>

            {/* Testimonial Quote - Clean editorial typography that wraps naturally in 3-4 lines */}
            <blockquote className="text-xl sm:text-2xl lg:text-[27px] xl:text-[28px] font-medium sm:font-semibold text-neutral-900 tracking-tight leading-[1.38] sm:leading-[1.32]">
              {quote}
            </blockquote>
          </div>

          {/* Right Column: Author Profile (sits naturally adjacent at the bottom) */}
          <div className="flex items-center gap-3.5 shrink-0 lg:pb-1">
            {/* Circular Avatar with Brand / Verified Badge */}
            <div className="relative shrink-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-neutral-100 ring-1 ring-black/5">
                <Image
                  src={avatarSrc}
                  alt={authorName}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Verified badge at bottom-right corner */}
              <div
                className="absolute -bottom-0.5 -right-0.5 w-4.5 h-4.5 bg-neutral-950 rounded-[4px] flex items-center justify-center text-white ring-2 ring-white shadow-2xs"
                aria-hidden="true"
              >
                <svg
                  className="w-2.5 h-2.5 text-white"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 6.2L4.8 8.5L9.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Author Identity & Role */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 tracking-tight leading-snug">
                {authorName}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-snug mt-0.5 max-w-[220px] sm:max-w-none">
                {authorSubtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
