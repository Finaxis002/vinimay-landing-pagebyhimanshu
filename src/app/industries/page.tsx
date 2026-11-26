import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";
import AllIndustriesExplorer from "@/components/industries/AllIndustriesExplorer";
import IndustryFaqSection from "@/components/industries/IndustryFaqSection";
import { getIndustryFaq } from "@/content/industryFaqData";

export const metadata: Metadata = {
  title: "All Industry Solutions – Dedicated Billing & Inventory Software | Vinimay",
  description:
    "Explore 12+ pre-configured industry verticals for transportation, marbles, courier, travel, manufacturing, real estate, restaurants, gyms, kirana, trading, and services. 100% Free Forever.",
  keywords: [
    "industry billing software",
    "business accounting solutions",
    "free GST billing India",
    "transport billing software",
    "marble tile accounting",
    "restaurant POS software",
    "gym management software",
    "kirana billing software",
    "manufacturing BOM software",
    "Vinimay accounting",
  ],
};

export default function IndustriesIndexPage() {
  const allFaq = getIndustryFaq("all");

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <FeaturePageLayout
          badge="12+ Dedicated Business Verticals"
          title="Tailored Solutions for Every Industry"
          lead="Every business has its own operational rhythm. Vinimay replaces generic, one-size-fits-all accounting with dedicated forms, statutory tax codes, and hardware integrations built for your specific trade."
          trustChips={[
            "🛡 100% Free Forever",
            "⚡ Zero Setup Costs",
            "📋 Statutory GST & SAC Pre-Configured",
            "📦 Industry-Specific Fields",
            "✨ Zero Accounting Knowledge Needed",
          ]}
        >
          {/* Light Mode Grid Section */}
          <AllIndustriesExplorer />

          {/* Industry Directory FAQ Section */}
          <IndustryFaqSection
            industryTitle="Industry Solutions"
            badge={allFaq.badge}
            headline={allFaq.headline}
            subtitle={allFaq.subtitle}
            items={allFaq.items}
          />
        </FeaturePageLayout>
      </main>

      <Footer />
    </>
  );
}
