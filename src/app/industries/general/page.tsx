import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";
import FeatureBannerScreen from "@/components/features/FeatureBannerScreen";
import IndustryWorkingMockup from "@/components/industries/IndustryWorkingMockup";
import GeneralCapabilitiesGrid from "@/components/industries/general/GeneralCapabilitiesGrid";
import GeneralWorkflowSteps from "@/components/industries/general/GeneralWorkflowSteps";
import IndustryFaqSection from "@/components/industries/IndustryFaqSection";
import IndustryBlogsSection from "@/components/industries/IndustryBlogsSection";
import { getIndustryFaq } from "@/content/industryFaqData";
import { getIndustryBlogs } from "@/content/industryBlogsData";

export const metadata: Metadata = {
  title: "General Business Suite – Billing, Inventory & Accounts | Vinimay",
  description:
    "Complete billing, inventory, and accounting software built for general stores, retailers, traders, and services. 100% Free Forever with zero setup fees.",
  keywords: [
    "general billing software",
    "retail shop POS",
    "general store accounting software",
    "inventory management for general store",
    "free GST billing India",
    "Vinimay accounting",
  ],
};

export default function GeneralIndustryPage() {
  const generalFaq = getIndustryFaq("general");
  const generalBlogs = getIndustryBlogs("general");

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <FeaturePageLayout
          badge="General Business & Retail"
          title="Simple Billing, Inventory & Accounts for every Business"
          lead="Add Products , Services, manage stock, create GST/VAT invoicesand handle entire business in one place"
          trustChips={[
            "🛡 100% GST & Non-GST Billing",
            "⚡ No Credit Card required",
            "⚡ Setup in Minutes",
            "✨ Zero Accounting Knowledge Needed",
          ]}
          screenComponent={
            <FeatureBannerScreen
              windowTitle="Vinimay"
              windowSubtitle="/ General Business & Retail POS"
              badgeCode="GEN-2026"
              customerName="Sharma General Store"
              customerGstin="✓ GSTIN 23ABCDE1234F1Z5"
              chips={[
                "Counter POS Active",
                "Barcode Scanned",
                "Stock Synced",
                "WhatsApp Bill Sent",
              ]}
            >
              <IndustryWorkingMockup industryId="general" />
            </FeatureBannerScreen>
          }
        >
          <GeneralCapabilitiesGrid />
          <GeneralWorkflowSteps />
          <IndustryBlogsSection
            industryTitle="General Business & Retail"
            data={generalBlogs}
          />
          <IndustryFaqSection
            industryTitle="General Business & Retail"
            badge={generalFaq.badge}
            headline={generalFaq.headline}
            subtitle={generalFaq.subtitle}
            items={generalFaq.items}
          />
        </FeaturePageLayout>
      </main>

      <Footer />
    </>
  );
}
