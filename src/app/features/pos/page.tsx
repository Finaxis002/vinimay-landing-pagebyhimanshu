import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";
import FeatureBannerScreen from "@/components/features/FeatureBannerScreen";
import POSTabsSection from "@/components/common/POSTabsSection";
import PosScrollStory from "@/components/features/pos/PosScrollStory";
import PosOrbitalCards from "@/components/features/pos/PosOrbitalCards";
import StackingCardsSection from "@/components/common/StackingCardsSection";
import { POS_STACKING_CARDS } from "@/content/stackingCardsData";
import FeatureTestimonialCard from "@/components/features/FeatureTestimonialCard";
import FeatureDashboardPreview from "@/components/features/FeatureDashboardPreview";
import FeatureCtaBanner from "@/components/features/FeatureCtaBanner";

export const metadata: Metadata = {
  title: "POS Billing Software & Counter Checkout – Vinimay",
  description:
    "Fast, offline-friendly point-of-sale software for retail, restaurants, and supermarkets. Sub-second barcode scanning, split payments, and thermal receipts.",
  keywords: [
    "POS billing software",
    "retail POS system",
    "offline point of sale",
    "restaurant billing software KOT",
    "barcode billing software India",
    "thermal printer billing",
    "Vinimay accounting",
  ],
};

export default function PosBillingPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <FeaturePageLayout
          badge="Point of Sale (POS)"
          title="Lightning-Fast Counter POS for High-Volume Stores"
          lead="A fast, offline-friendly point-of-sale built for counters that can't afford to slow down. Barcode scanning, split payments, and instant thermal printing."
          trustChips={[
            "⚡ Sub-second Barcode Scan",
            "📶 Works 100% Offline",
            "🖨️ Thermal & WhatsApp Receipts",
          ]}
          screenComponent={
            <FeatureBannerScreen
              windowTitle="Vinimay"
              windowSubtitle="/ Counter POS Terminal"
              badgeCode="POS-REG-01"
              customerName="Walk-in Order #412"
              customerGstin="✓ Terminal Active"
              chips={[
                "Barcode Scanned",
                "Items Added",
                "Split Paid",
                "Slip Printed",
              ]}
            />
          }
        >
          {/* Section 0: Sub-second Counter Performance Workflow Showcase */}
          <POSTabsSection />

          {/* Section 1: From Scan to Sale 6-Step Scroll Story */}
          <PosScrollStory />

          {/* Section 2: Counter Architecture Orbital Cards */}
          <PosOrbitalCards />

          {/* Section 2.2: 3D Stacking Cards Capabilities */}
          <StackingCardsSection
            sectionTag="COUNTER ARCHITECTURE"
            sectionTitle="Engineered for Peak Rush Hour Counter Speed"
            sectionLead="Sub-second dish punching, flexible multi-tender split settlements, and 100% offline billing that never slows down."
            cards={POS_STACKING_CARDS}
          />

          {/* Section 2.5: Customer Testimonial (Himanshu Dhammeriya) */}
          <FeatureTestimonialCard
            featureName="Point of Sale (POS)"
            metricBadge="Checkout Velocity"
            metricHighlight="1,200+ Daily Counter Bills"
            quote="During evening rush hours, counter lines used to stretch out the door. Vinimay's counter POS handles the crush effortlessly—sub-second barcode scans, instant split payments between cash and UPI, and immediate thermal receipt printing. When our local fiber internet went down for three hours on a Saturday, offline billing kept ringing up orders without losing a single transaction. It is reliable and rock solid."
            authorRole="Founder & MD"
            companyName="Dhammeriya HyperMart & Superstores"
            businessScale="1,200+ Daily Receipts"
            gradientAccent="from-cyan-600 to-blue-600"
          />

          {/* Section 3: Live Sales & Invoices Dashboard Preview */}
          <FeatureDashboardPreview />

          {/* Section 4: Final CTA Banner */}
          <FeatureCtaBanner
            title="Accelerate Your Counter Checkout Today"
            lead="Speed up customer lines with zero hardware lock-in. Works on your existing laptop, PC, or tablet."
            buttonText="Start billing free"
            buttonHref="https://vinimay.sharda.co.in/client-signup"
          />
        </FeaturePageLayout>
      </main>

      <Footer />
    </>
  );
}
