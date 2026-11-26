"use client";

import React, { useState } from "react";
import ArcHeading from "@/components/common/ArcHeading";

export default function Inquiry() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("India (+91)");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const productOptions = ["POS", "Invoice",  "Inventory", "Purchase", "Gym"];

  const toggleProduct = (prod: string) => {
    setSelectedProducts((prev) =>
      prev.includes(prod) ? prev.filter((p) => p !== prod) : [...prev, prod]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    alert(`Thank you ${name}! Your inquiry has been received. Our team will connect with you shortly.`);
    setName("");
    setEmail("");
    setPhone("");
    setCity("");
    setPincode("");
    setBusinessName("");
    setSelectedProducts([]);
    setSubmitted(false);
  };

  return (
    <section id="inquiry" className="relative bg-white pt-16 sm:pt-20 pb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20 -mb-28 sm:-mb-32">
        <div className="bg-[#f4f5f7] rounded-3xl lg:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-200/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 pr-0 lg:pr-4">
              <div>
                <ArcHeading
                  as="h2"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4"
                >
                  Quick Inquiry
                </ArcHeading>
              </div>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Ask your queries here.
              </p>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} id="quick-inquiry-form" className="space-y-4">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inquiry-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Name<span className="text-purple-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="inquiry-name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email<span className="text-purple-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="inquiry-email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone number & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inquiry-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone number<span className="text-purple-500">*</span>
                    </label>
                    <div className="flex rounded-lg border border-slate-300 bg-white overflow-hidden focus-within:ring-1 focus-within:ring-purple-500 focus-within:border-purple-500 transition-all">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="bg-slate-50 border-r border-slate-300 px-2.5 py-2.5 text-xs sm:text-sm font-medium text-slate-700 focus:outline-none cursor-pointer"
                      >
                        <option>India (+91)</option>
                        <option>UAE (+971)</option>
                        <option>USA (+1)</option>
                        <option>UK (+44)</option>
                      </select>
                      <input
                        type="tel"
                        id="inquiry-phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="flex-1 px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="inquiry-city" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      City<span className="text-purple-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="inquiry-city"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Pincode & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inquiry-pincode" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Pincode<span className="text-purple-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="inquiry-pincode"
                      required
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry-business" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Business Name<span className="text-purple-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="inquiry-business"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    />
                  </div>
                </div>

                {/* Row 4: Product interest pills */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Which product are you interested in?<span className="text-purple-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {productOptions.map((prod) => {
                      const isSelected = selectedProducts.includes(prod);
                      return (
                        <button
                          key={prod}
                          type="button"
                          onClick={() => toggleProduct(prod)}
                          className={`product-interest-btn px-4 py-1.5 rounded-full text-xs sm:text-sm transition-all ${
                            isSelected
                              ? "active border border-violet-500 font-bold text-violet-600 bg-violet-50"
                              : "border border-slate-300 font-medium text-slate-700 bg-white hover:border-slate-400"
                          }`}
                        >
                          {prod}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Row 5: Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-800 text-white font-bold py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all text-sm tracking-wide"
                  >
                    {submitted ? "Submitting..." : "Submit"}
                  </button>
                </div>

                {/* Disclaimer */}
                <p className="text-[11px] text-slate-500 text-center pt-1 leading-relaxed">
                  By submitting this form, you agree to receive updates from Vinimay and accept our{" "}
                  <a
                    href="https://vinimay.sharda.co.in/knowledge-base"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-slate-800"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
