import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";
import FeatureBannerScreen from "@/components/features/FeatureBannerScreen";
import VendorTabsSection from "@/components/common/VendorTabsSection";
import VendorScrollStory from "@/components/features/vendors/VendorScrollStory";
import VendorOrbitalCards from "@/components/features/vendors/VendorOrbitalCards";
import StackingCardsSection from "@/components/common/StackingCardsSection";
import { VENDOR_STACKING_CARDS } from "@/content/stackingCardsData";
import FeatureTestimonialCard from "@/components/features/FeatureTestimonialCard";
import FeatureDashboardPreview from "@/components/features/FeatureDashboardPreview";
import FeatureCtaBanner from "@/components/features/FeatureCtaBanner";

export const metadata: Metadata = {
  title: "Vendor Management & Supplier Payables – Vinimay",
  description:
    "Manage vendor contacts, generate purchase orders (PO), log incoming bills, and keep track of supplier dues with automated payment reminders on Vinimay.",
  keywords: [
    "vendor management software",
    "supplier management system",
    "purchase order software India",
    "trade payables tracker",
    "GSTR 2B reconciliation software",
    "supplier ledger management",
    "Vinimay accounting",
  ],
};

export default function VendorsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <FeaturePageLayout
          badge="Vendor & Supplier Management"
          title="Streamline Supplier Purchases & Payables On Time"
          lead="Manage vendor contacts, generate purchase orders (PO), log incoming bills, and keep track of supplier dues with automated payment reminders."
          trustChips={[
            "📋 1-Click Purchase Orders (PO)",
            "🔔 Due Date Payment Alerts",
            "🛡️ 100% Input Tax Credit (ITC) Verification",
          ]}
          screenComponent={
            <FeatureBannerScreen
              windowTitle="Vinimay"
              windowSubtitle="/ Supplier Directory & Payables"
              badgeCode="VEN-MGMT-01"
              customerName="ABC Traders & Electronics"
              customerGstin="✓ GSTIN 23AABCC8871Z1Z8"
              chips={[
                "PO Dispatched",
                "Goods Inward",
                "ITC Matched",
                "Payment Cleared",
              ]}
            />
          }
        >
          {/* Section 0: Procurement & Accounts Payable Automation */}
          <VendorTabsSection />

          {/* Section 1: End-to-End Procurement Scroll Story */}
          <VendorScrollStory />

          {/* Section 2: Supplier Capabilities Orbital Cards */}
          <VendorOrbitalCards />

          {/* Section 2.2: 3D Stacking Cards Capabilities */}
          <StackingCardsSection
            sectionTag="SUPPLIER SUPPLY CHAIN"
            sectionTitle="Complete Accounts Payable & Input Tax Protection"
            sectionLead="Issue purchase orders, inspect incoming shipments with GRN 3-way matching, and prevent tax credit leakage with GSTR-2B reconciliation."
            cards={VENDOR_STACKING_CARDS}
          />

          {/* Section 2.5: Customer Testimonial (Himanshu Dhammeriya) */}
          <FeatureTestimonialCard
            featureName="Vendor & Supplier Management"
            metricBadge="Tax Credit Match"
            metricHighlight="₹2.4 Lakhs ITC Claimed"
            quote="Managing dispatches, purchase orders, and input tax credit across 40+ raw material suppliers used to leave money on the table every tax cycle. With Vinimay, every PO converts smoothly to an inward GRN inspection. The system matches supplier invoices directly against our GSTR-2B so we never miss legitimate tax credits, while upcoming due date alerts helped us secure early-payment vendor discounts every month."
            authorRole="Director of Procurement"
            companyName="Dhammeriya Manufacturing Corp"
            businessScale="42 Verified Raw Material Suppliers"
            gradientAccent="from-amber-600 to-rose-600"
          />

          {/* Section 3: Live Business Dashboard Overview */}
          <FeatureDashboardPreview />

          {/* Section 4: Final CTA Banner */}
          <FeatureCtaBanner
            title="Take Complete Control of Supplier Payables"
            lead="Keep vendors happy and claim every rupee of GST Input Tax Credit with zero paperwork."
            buttonText="Start managing vendors free"
            buttonHref="https://vinimay.sharda.co.in/client-signup"
          />
        </FeaturePageLayout>
      </main>

      <Footer />
    </>
  );
}
