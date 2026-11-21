import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";
import FeatureBannerScreen from "@/components/features/FeatureBannerScreen";
import GstInvoiceStory from "@/components/features/GstInvoiceStory";
import FeatureBentoGrid from "@/components/features/FeatureBentoGrid";
import FeatureDashboardPreview from "@/components/features/FeatureDashboardPreview";
import FeatureCtaBanner from "@/components/features/FeatureCtaBanner";

export const metadata: Metadata = {
  title: "GST Billing & Invoicing – Vinimay",
  description:
    "Generate GST-compliant invoices, manage taxes, track payments and share professional bills with your customers, all in one simple platform. 100% Free Forever.",
  keywords: [
    "GST billing software",
    "free GST invoice generator",
    "e-invoicing software India",
    "e-way bill generation",
    "GSTR-1 report software",
    "thermal invoice billing",
    "Vinimay accounting",
  ],
};

export default function GstBillingPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <FeaturePageLayout
          badge="GST Billing & Invoicing"
          title="Create GST Invoices Faster With Vinimay"
          lead="Generate GST-compliant invoices, manage taxes, track payments and share professional bills with your customers, all in one simple platform."
          trustChips={[
            "🛡 100% GST compliant",
            "🖱 Easy to use",
            "✨ No accounting knowledge needed",
          ]}
          screenComponent={
            <FeatureBannerScreen
              windowTitle="Vinimay"
              windowSubtitle="/ New GST Invoice"
              badgeCode="INV-2041"
              customerName="Sharma Traders"
              customerGstin="✓ GSTIN 23ABCDE1234F1Z5"
            />
          }
        >
          {/* Section 1: Watch an invoice build itself (GST Invoice Story) */}
          <GstInvoiceStory />

          {/* Section 2: Built for billing, not paperwork (Interactive Bento Grid) */}
          <FeatureBentoGrid />

          {/* Section 3: Your whole business on one screen (Dark Dashboard) */}
          <FeatureDashboardPreview />

          {/* Section 4: Ready to simplify your GST billing? (CTA Banner) */}
          <FeatureCtaBanner
            title="Ready to simplify your GST billing?"
            lead="Create your first GST invoice in minutes. No accounting knowledge needed."
            buttonText="Create your first invoice"
            buttonHref="https://vinimay.sharda.co.in/client-signup"
          />
        </FeaturePageLayout>
      </main>

      <Footer />
    </>
  );
}
