import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";
import FeatureBannerScreen from "@/components/features/FeatureBannerScreen";
import GSTComplianceTabsSection from "@/components/common/GSTComplianceTabsSection";
import GstInvoiceStory from "@/components/features/GstInvoiceStory";
import GstOrbitalCards from "@/components/features/gst-billing/GstOrbitalCards";
import StackingCardsSection from "@/components/common/StackingCardsSection";
import { GST_STACKING_CARDS } from "@/content/stackingCardsData";
import FeatureTestimonialCard from "@/components/features/FeatureTestimonialCard";
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
          // lead="Generate GST-compliant invoices, manage taxes, track payments and share professional bills with your customers, all in one simple platform."
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
          {/* Section 0: Statutory GST Compliance & Automation */}
          <GSTComplianceTabsSection />

          {/* Section 1: Watch an invoice build itself (GST Invoice Story) */}
          <GstInvoiceStory />

          {/* Section 2: Built for billing, not paperwork (Orbital 3D Feature Cards) */}
          <GstOrbitalCards />

          {/* Section 2.2: 3D Stacking Cards Capabilities */}
          <StackingCardsSection
            sectionTag="STATUTORY GST ARCHITECTURE"
            sectionTitle="Everything You Need for Frictionless GST Compliance"
            sectionLead="From automated multi-rate tax calculations to direct government portal e-invoicing and instant WhatsApp collections."
            cards={GST_STACKING_CARDS}
          />

          {/* Section 2.5: Customer Testimonial (Himanshu Dhammeriya) */}
          <FeatureTestimonialCard
            featureName="GST Billing & Invoicing"
            metricBadge="Billing Efficiency"
            metricHighlight="75% Faster Invoicing"
            quote="Before Vinimay, generating over 350 GST invoices each month was a constant hassle of manual CGST/SGST splits and accidental HSN mismatches. Vinimay completely streamlined our checkout—invoices generate in 12 seconds with verified tax calculations. The 1-click WhatsApp dispatch with dynamic UPI links reduced payment delays immediately, and our CA files GSTR-1 directly from the JSON export without a single correction."
            authorRole="Managing Director"
            companyName="Dhammeriya Enterprises & Retail"
            businessScale="350+ Monthly GST Invoices"
            gradientAccent="from-purple-600 to-indigo-600"
          />

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
