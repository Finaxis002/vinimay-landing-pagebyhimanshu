import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";
import FeatureBannerScreen from "@/components/features/FeatureBannerScreen";
import TransactionTabsSection from "@/components/common/TransactionTabsSection";
import TransactionScrollStory from "@/components/features/transactions/TransactionScrollStory";
import TransactionOrbitalCards from "@/components/features/transactions/TransactionOrbitalCards";
import StackingCardsSection from "@/components/common/StackingCardsSection";
import { TRANSACTION_STACKING_CARDS } from "@/content/stackingCardsData";
import FeatureTestimonialCard from "@/components/features/FeatureTestimonialCard";
import FeatureDashboardPreview from "@/components/features/FeatureDashboardPreview";
import FeatureCtaBanner from "@/components/features/FeatureCtaBanner";

export const metadata: Metadata = {
  title: "Transaction Management & Accounting Ledger – Vinimay",
  description:
    "Manage sales, purchases, receipts, payments, and double-entry journal vouchers from one unified ledger. Real-time reconciliation and search on Vinimay.",
  keywords: [
    "transaction management software",
    "accounting ledger software India",
    "double entry bookkeeping SaaS",
    "bank statement reconciliation software",
    "daybook software",
    "journal voucher accounting",
    "Vinimay accounting",
  ],
};

export default function TransactionsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <FeaturePageLayout
          badge="Transaction Management & Books"
          title="Complete Accounting Ledger & Audit-Proof Transactions"
          backgroundImage="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1600&auto=format&fit=crop&q=80"
          // lead="Manage sales, purchases, receipts, payments, and double-entry journal vouchers from one unified ledger. Real-time reconciliation and search."
          trustChips={[
            "⚖️ Double-Entry Compliant",
            "🔍 Sub-Second Transaction Search",
            "🛡️ Audit-Ready Journal Entries",
          ]}
          screenComponent={
            <FeatureBannerScreen
              windowTitle="Vinimay"
              windowSubtitle="/ Accounting Books & Ledgers"
              badgeCode="TXN-BOOK-01"
              customerName="Dhurandhar Fitness Hub"
              customerGstin="✓ Daybook Balanced"
              chips={[
                "Voucher Recorded",
                "Debit/Credit Matched",
                "Ledger Updated",
                "Bank Reconciled",
              ]}
            />
          }
        >
          {/* Section 0: Double-Entry Accounting & Audit Trail */}
          <TransactionTabsSection />

          {/* Section 1: Double-Entry Books & Daybook Scroll Story */}
          <TransactionScrollStory />

          {/* Section 2: Transaction Capabilities Orbital Cards */}
          <TransactionOrbitalCards />

          {/* Section 2.2: 3D Stacking Cards Capabilities */}
          <StackingCardsSection
            sectionTag="ACCOUNTING GOVERNANCE"
            sectionTitle="Audit-Proof Books with Automated Double-Entry Rigor"
            sectionLead="Maintain chronological daybooks, reconcile bank statements in seconds, and stay 100% compliant with MCA statutory audit trail mandates."
            cards={TRANSACTION_STACKING_CARDS}
          />

          {/* Section 2.5: Customer Testimonial (Himanshu Dhammeriya) */}
          <FeatureTestimonialCard
            featureName="Transaction Books & Daybook"
            metricBadge="Audit Speed"
            metricHighlight="100% Balanced Double-Entry"
            quote="Bookkeeping used to be an overwhelming quarterly scramble for our finance team. Vinimay's automated double-entry engine and chronological daybook turned financial operations into an exact science. We upload our bank statements and 98% of entries match automatically. Having a live trial balance, instant sub-second search, and real-time P&L ready for our statutory CA audit gives us total peace of mind."
            authorRole="Managing Director"
            companyName="Dhammeriya Group of Companies"
            businessScale="₹84 Lakhs Monthly Volume"
            gradientAccent="from-purple-600 to-pink-600"
          />

          {/* Section 3: Live Business Dashboard Overview */}
          <FeatureDashboardPreview />

          {/* Section 4: Final CTA Banner */}
          <FeatureCtaBanner
            title="Keep Your Books Perfectly Balanced Today"
            lead="Record sales, purchases, receipts, and bank vouchers with zero double-entry errors."
            buttonText="Start managing transactions free"
            buttonHref="https://vinimay.sharda.co.in/client-signup"
          />
        </FeaturePageLayout>
      </main>

      <Footer />
    </>
  );
}
