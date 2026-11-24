import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";
import FeatureBannerScreen from "@/components/features/FeatureBannerScreen";
import CustomerTabsSection from "@/components/common/CustomerTabsSection";
import CustomerScrollStory from "@/components/features/customers/CustomerScrollStory";
import CustomerOrbitalCards from "@/components/features/customers/CustomerOrbitalCards";
import StackingCardsSection from "@/components/common/StackingCardsSection";
import { CUSTOMER_STACKING_CARDS } from "@/content/stackingCardsData";
import FeatureTestimonialCard from "@/components/features/FeatureTestimonialCard";
import FeatureDashboardPreview from "@/components/features/FeatureDashboardPreview";
import FeatureCtaBanner from "@/components/features/FeatureCtaBanner";

export const metadata: Metadata = {
  title: "Customer Management & CRM – Vinimay",
  description:
    "Organize customer profiles, track purchase history, send automated WhatsApp payment reminders, and manage customer credit limits with Vinimay.",
  keywords: [
    "customer management software",
    "SaaS CRM India",
    "WhatsApp payment reminder",
    "customer ledger software",
    "party outstanding tracker",
    "customer loyalty software",
    "Vinimay accounting",
  ],
};

export default function CustomersPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <FeaturePageLayout
          badge="Customer Relationship Management"
          title="Build Stronger Customer Loyalty & Track Receivables"
          lead="Store customer profiles, view complete purchase history, send automated WhatsApp payment reminders, and keep customer credit strictly under control."
          trustChips={[
            "👥 Centralized Customer CRM",
            "💬 WhatsApp Payment Reminders",
            "📈 Credit Limit & Ledger Tracking",
          ]}
          screenComponent={
            <FeatureBannerScreen
              windowTitle="Vinimay"
              windowSubtitle="/ Customer Directory & Ledgers"
              badgeCode="CRM-CUST-01"
              customerName="Sharma Enterprises"
              customerGstin="✓ GSTIN 23ABCDE1234F1Z5"
              chips={[
                "Customer Found",
                "History Pulled",
                "Ledger Verified",
                "WhatsApp Sent",
              ]}
            />
          }
        >
          {/* Section 0: Centralized CRM & Khata Governance */}
          <CustomerTabsSection />

          {/* Section 1: Customer Lifecycle & Profile Scroll Story */}
          <CustomerScrollStory />

          {/* Section 2: CRM Architecture Orbital Cards */}
          <CustomerOrbitalCards />

          {/* Section 2.2: 3D Stacking Cards Capabilities */}
          <StackingCardsSection
            sectionTag="RELATIONSHIP INTELLIGENCE"
            sectionTitle="Transform Buyer Credit into Predictable Cash Flow"
            sectionLead="Maintain unified customer profiles, track real-time aging receivables, and collect dues 3x faster via automated WhatsApp reminders."
            cards={CUSTOMER_STACKING_CARDS}
          />

          {/* Section 2.5: Customer Testimonial (Himanshu Dhammeriya) */}
          <FeatureTestimonialCard
            featureName="Customer Management (CRM)"
            metricBadge="Cash Flow Recovery"
            metricHighlight="-44% Overdue Credit Dues"
            quote="Unmonitored customer credit was our single biggest financial leak. Vinimay gave us full visibility with 360° party ledgers and an automated credit limit guard that prevents new billing when a client exceeds their ceiling. The automated WhatsApp payment reminder with attached statement PDFs and direct UPI links helped recover over ₹6.5 Lakhs in overdue receivables in the first two months alone."
            authorRole="Managing Partner"
            companyName="Dhammeriya Wholesale Network"
            businessScale="840+ Active Trade Customers"
            gradientAccent="from-indigo-600 to-purple-600"
          />

          {/* Section 3: Live Business Dashboard Overview */}
          <FeatureDashboardPreview />

          {/* Section 4: Final CTA Banner */}
          <FeatureCtaBanner
            title="Turn Casual Walk-Ins Into Lifetime Customers"
            lead="Manage customer profiles, ledgers, and automated payment reminders with zero complexity."
            buttonText="Start managing customers free"
            buttonHref="https://vinimay.sharda.co.in/client-signup"
          />
        </FeaturePageLayout>
      </main>

      <Footer />
    </>
  );
}
