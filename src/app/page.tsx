import Loader from "@/components/sections/Loader";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import WhatIsVinimay from "@/components/sections/WhatIsVinimay";
import Industries from "@/components/sections/Industries";
import HowItWorks from "@/components/sections/HowItWorks";
import AccountingSolutions from "@/components/sections/AccountingSolutions";
import SoftwareTour from "@/components/sections/SoftwareTour";
import FeaturesOrbital from "@/components/sections/FeaturesOrbital";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Inquiry from "@/components/sections/Inquiry";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <WhatIsVinimay />
        <Industries />
        <HowItWorks />
        <AccountingSolutions />
        <SoftwareTour />
        <FeaturesOrbital />
        <Testimonials />
        <Faq />
        <Inquiry />
      </main>
      <Footer />
    </>
  );
}
