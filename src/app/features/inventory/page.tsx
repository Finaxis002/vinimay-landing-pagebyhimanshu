import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";
import FeatureBannerScreen from "@/components/features/FeatureBannerScreen";
import ComplianceTabsSection from "@/components/common/ComplianceTabsSection";
import InventoryScrollStory from "@/components/features/inventory/InventoryScrollStory";
import InventoryOrbitalCards from "@/components/features/inventory/InventoryOrbitalCards";
import StackingCardsSection from "@/components/common/StackingCardsSection";
import { INVENTORY_STACKING_CARDS } from "@/content/stackingCardsData";
import FeatureTestimonialCard from "@/components/features/FeatureTestimonialCard";
import FeatureDashboardPreview from "@/components/features/FeatureDashboardPreview";
import FeatureCtaBanner from "@/components/features/FeatureCtaBanner";

export const metadata: Metadata = {
  title: "Inventory Management & Stock Control – Vinimay",
  description:
    "Track stock across multiple warehouses in real time, set automated low-stock alerts, manage batches & barcodes, and eliminate stockouts with Vinimay.",
  keywords: [
    "inventory management software",
    "stock control system",
    "warehouse inventory tracking",
    "low stock alert software",
    "barcode stock management",
    "batch expiry inventory software",
    "Vinimay accounting",
  ],
};

export default function InventoryPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <FeaturePageLayout
          badge="Inventory & Stock Control"
          title="Control Your Inventory With Real-Time Stock Insights"
          backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&auto=format&fit=crop&q=80"
          // lead="Know exactly what's in stock, what's running low and what's moving fast — with a live dashboard that updates as every purchase and sale happens."
          trustChips={[
            "📦 Real-Time Multi-Warehouse Stock",
            "⚡ Automated Low-Stock Alerts",
            "🏷️ Barcode & Batch Expiry Tracking",
          ]}
          screenComponent={
            <FeatureBannerScreen
              windowTitle="Vinimay"
              windowSubtitle="/ Inventory & Stock Control"
              badgeCode="STK-2026"
              customerName="Central Godown (Bhopal)"
              customerGstin="✓ 18,420 Units Available"
              chips={[
                "Stock Received",
                "Barcode Scanned",
                "Shelf Synced",
                "Ledger Balanced",
              ]}
            />
          }
        >
          {/* Section 0: What makes Vinimay Inventory GST Compliant (Reusable Tabs) */}
          <ComplianceTabsSection
            title="What makes Vinimay Inventory GST / VAT Compliant"
            tagline="100% STATUTORY GST/VAT COMPLIANCE"
          />

          {/* Section 1: Watch stock move in real time (Inventory Scroll Story) */}
          <InventoryScrollStory />

          {/* Section 2: Inventory Intelligence Orbital Cards */}
          <InventoryOrbitalCards />

          {/* Section 2.2: 3D Stacking Cards Capabilities */}
          <StackingCardsSection
            sectionTag="INVENTORY INTELLIGENCE"
            sectionTitle="Precision Control for High-Velocity Inventory"
            sectionLead="Prevent stockouts, track batches with expiration dates, and sync movements seamlessly across all your warehouses."
            cards={INVENTORY_STACKING_CARDS}
          />

          {/* Section 2.5: Customer Testimonial (Himanshu Dhammeriya) */}
          <FeatureTestimonialCard
            featureName="Inventory & Stock Control"
            metricBadge="Stock Accuracy"
            metricHighlight="Zero Stockouts Across 4 Godowns"
            quote="Tracking stock across our main warehouse and three regional distribution points used to require endless reconciliations and guesswork. Vinimay's real-time multi-godown sync and 0.8-second barcode scanning changed everything. The automated reorder alerts notify our procurement team before high-velocity SKUs hit critical levels, and FIFO batch tracking has completely eliminated inventory expiration write-offs."
            authorRole="Operations Director"
            companyName="Dhammeriya Logistics & Supply"
            businessScale="18,400+ Units Tracked Live"
            gradientAccent="from-emerald-600 to-teal-600"
          />

          {/* Section 3: Live Business Dashboard Overview */}
          <FeatureDashboardPreview />

          {/* Section 4: Final CTA Banner */}
          <FeatureCtaBanner
            title="Ready to Take Complete Control of Your Inventory?"
            lead="Manage stock across every store and godown without spreadsheets. Get started in minutes."
            buttonText="Start tracking inventory free"
            buttonHref="https://vinimay.sharda.co.in/client-signup"
          />
        </FeaturePageLayout>
      </main>

      <Footer />
    </>
  );
}
