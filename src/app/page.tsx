import dynamic from "next/dynamic";
import Loader from "@/components/sections/Loader";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Goal from "@/components/sections/Goal";

// Dynamic imports for below-the-fold components to reduce initial mobile bundle and TBT
const WhatIsVinimay = dynamic(() => import("@/components/sections/WhatIsVinimay"));
const Industries = dynamic(() => import("@/components/sections/Industries"));
const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks"));
const AccountingSolutions = dynamic(() => import("@/components/sections/AccountingSolutions"));
const SoftwareTour = dynamic(() => import("@/components/sections/SoftwareTour"));
const HowToCreateBill = dynamic(() => import("@/components/sections/HowToCreateBill"));
const FeaturesOrbital = dynamic(() => import("@/components/sections/FeaturesOrbital"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Faq = dynamic(() => import("@/components/sections/Faq"));
const Footer = dynamic(() => import("@/components/sections/Footer"));

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Goal/>
        <WhatIsVinimay />
        <Industries />
        <HowItWorks />
        <HowToCreateBill />
        {/* <AccountingSolutions /> */}
        <FeaturesOrbital />
        <SoftwareTour />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
