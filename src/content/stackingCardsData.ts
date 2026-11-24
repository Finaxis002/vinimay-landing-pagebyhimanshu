import { StackingCardItem } from "@/components/common/StackingCardsSection";

export const GST_STACKING_CARDS: StackingCardItem[] = [
  {
    id: "gst-1",
    stepNumber: "01",
    badge: "STATUTORY TAX ENGINE",
    title: "Automated Multi-Rate Tax Invoices with Rule 46 Formats",
    description:
      "Generate flawless GST invoices in seconds. Vinimay checks the buyer's state code to apply the exact combination of CGST, SGST, or IGST, validates HSN/SAC codes, and prints in professional A4 or 3-inch thermal layouts.",
    bullets: [
      "100% compliant with all 16 mandatory Rule 46 statutory requirements",
      "Auto-applies 0%, 5%, 12%, 18%, and 28% tax slabs plus compensation cess",
      "Sequential financial-year serial numbering with custom branch prefixes",
    ],
    ctaText: "Create GST Invoice",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    statBadge: { label: "Tax Calculation Accuracy", value: "100%" },
    gradientAccent: "bg-purple-600",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: "gst-2",
    stepNumber: "02",
    badge: "OFFICIAL IRP HANDSHAKE",
    title: "Instant B2B E-Invoicing & Signed QR Codes",
    description:
      "Connect directly to official Invoice Registration Portals (IRP). Generate Government-validated 64-character Invoice Reference Numbers (IRN) and digitally signed QR codes without manual data entry.",
    bullets: [
      "Sub-3-second IRN generation with automatic digital signature embedding",
      "Cryptographically signed QR codes printed directly on invoice PDFs",
      "Automated e-way bill generation for consignments exceeding ₹50,000",
    ],
    ctaText: "Generate E-Invoice",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    statBadge: { label: "IRN Generation Speed", value: "< 3s" },
    gradientAccent: "bg-indigo-600",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: "gst-3",
    stepNumber: "03",
    badge: "FASTER RECEIVABLES",
    title: "Direct WhatsApp Invoicing with Dynamic UPI QR",
    description:
      "Accelerate your cash collection cycles. Share professional invoices directly to your client's WhatsApp with an embedded, dynamic UPI QR code that locks the exact invoice amount for zero-friction payments.",
    bullets: [
      "Auto-sends invoices via official WhatsApp Cloud API with delivery receipts",
      "Embedded dynamic UPI QR code reduces payment collection delays by 40%",
      "Invoices automatically mark as paid and update customer ledgers on payment",
    ],
    ctaText: "Explore WhatsApp Billing",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    statBadge: { label: "Faster Collections", value: "40%" },
    gradientAccent: "bg-emerald-600",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=1200&auto=format&fit=crop&q=85",
  },
];

export const INVENTORY_STACKING_CARDS: StackingCardItem[] = [
  {
    id: "inv-1",
    stepNumber: "01",
    badge: "MULTI-GODOWN MANAGEMENT",
    title: "Real-Time Stock Synchronization Across All Warehouses",
    description:
      "Track inventory movements across multiple godowns, retail stores, and transit hubs from a single dashboard. Every purchase, stock transfer, and customer sale updates available counts instantaneously.",
    bullets: [
      "Rule 55 delivery challan generation for inter-branch and godown transfers",
      "Bin-level location tracking and minimum buffer stock threshold alerts",
      "Real-time godown balance valuation using FIFO and weighted average pricing",
    ],
    ctaText: "Manage Godowns",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    statBadge: { label: "Stock Visibility", value: "Real-Time" },
    gradientAccent: "bg-purple-600",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: "inv-2",
    stepNumber: "02",
    badge: "BATCH & LOT TRACKING",
    title: "Batch, Lot & Expiry Date Matrix Control",
    description:
      "Prevent spoiled goods and dead stock. Group items into distinct manufacturing batches with tracked expiry dates, automatic first-expiry-first-out (FEFO) dispensing, and lot-wise traceability.",
    bullets: [
      "Automated warnings when attempting to bill items near or past expiry",
      "Item-wise serial number tracking for electronics and warranty governance",
      "Batch-level profitability reports and margin tracking across stock lots",
    ],
    ctaText: "Track Stock Batches",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    statBadge: { label: "Spoilage Reduction", value: "92%" },
    gradientAccent: "bg-blue-600",
    imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: "inv-3",
    stepNumber: "03",
    badge: "AUTOMATED REORDER ENGINE",
    title: "Automated Safety Stock & Low-Stock Alerts",
    description:
      "Never turn away a customer due to an out-of-stock item. Set intelligent reorder points based on daily sales velocity, and convert low-stock alerts into approved Purchase Orders in one click.",
    bullets: [
      "Dynamic reorder point calculation factoring in supplier delivery lead times",
      "1-click conversion from low-stock notification to vendor Purchase Order",
      "Dead inventory alerts to identify slow-moving capital trapped on shelves",
    ],
    ctaText: "Set Safety Stock",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    statBadge: { label: "Stockout Prevention", value: "99.4%" },
    gradientAccent: "bg-amber-600",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=85",
  },
];

export const POS_STACKING_CARDS: StackingCardItem[] = [
  {
    id: "pos-1",
    stepNumber: "01",
    badge: "SUB-SECOND CHECKOUT",
    title: "Sub-Second Shortcode & Touchscreen Billing Engine",
    description:
      "Clear evening rush hour queues in record time. Cashiers can punch items in milliseconds using shortcodes (e.g. 'bn' for Butter Naan or '3*bn') or tap visual category tiles with zero mouse interaction.",
    bullets: [
      "Instant dish punching with keyboard shortcodes and auto-complete matching",
      "Visual category touch-grid with live active table status indicators",
      "Simultaneous dual dispatch to Kitchen Display (KOT) and billing terminal",
    ],
    ctaText: "Try POS Billing",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    statBadge: { label: "Checkout Velocity", value: "0.08s" },
    gradientAccent: "bg-purple-600",
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: "pos-2",
    stepNumber: "02",
    badge: "MULTI-TENDER CHECKOUT",
    title: "Flexible Split Payments & Dynamic UPI QR",
    description:
      "Allow guests to split their bill across Cash, dynamic UPI QR, Credit Cards, and Customer Khata without cashier calculation errors or register imbalances at shift end.",
    bullets: [
      "Real-time split allocation with instant exact-match mathematical verification",
      "Direct credit settlement to customer Khata with mobile number validation",
      "Integrated change-return calculator prevents counter cash handover mistakes",
    ],
    ctaText: "Explore Split Tender",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    statBadge: { label: "Math Discrepancy", value: "₹0.00" },
    gradientAccent: "bg-indigo-600",
    imageUrl: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: "pos-3",
    stepNumber: "03",
    badge: "FAIL-SAFE RESILIENCE",
    title: "100% Offline Billing with Automatic Cloud Sync",
    description:
      "Keep counter billing uninterrupted even if your broadband or WiFi drops completely. Invoices save to a local database and sync silently to the central cloud once connectivity is restored.",
    bullets: [
      "Continuous counter billing during internet blackouts with zero data loss",
      "High-speed direct thermal printing to 2-inch and 3-inch ESC/POS printers",
      "Automatic shift-end X and Z cash register reconciliation reports",
    ],
    ctaText: "Experience Offline POS",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    statBadge: { label: "Uptime Reliability", value: "100%" },
    gradientAccent: "bg-cyan-600",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=85",
  },
];

export const CUSTOMER_STACKING_CARDS: StackingCardItem[] = [
  {
    id: "cust-1",
    stepNumber: "01",
    badge: "CUSTOMER 360°",
    title: "Centralized Customer CRM & GSTIN Verification",
    description:
      "Consolidate all customer profiles into a single verified directory. Save customer GSTINs, multiple delivery addresses, preferred credit terms, and purchase histories for effortless recall.",
    bullets: [
      "Auto-populates customer trade name and address directly from GSTIN lookup",
      "Maintains complete purchase history, frequently ordered SKUs, and total spend",
      "Custom payment credit terms (Due on Receipt, Net 15, Net 30, Net 60)",
    ],
    ctaText: "Explore Customer Directory",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    statBadge: { label: "Profile Verification", value: "Instant" },
    gradientAccent: "bg-purple-600",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: "cust-2",
    stepNumber: "02",
    badge: "KHATA & RECEIVABLES",
    title: "Real-Time Customer Ledgers & Aging Receivables Analysis",
    description:
      "Track every rupee of trade credit (udhaar). The live double-entry ledger categorizes unpaid customer balances into age brackets (0-30, 31-60, 60+ days) so you always know where your money is.",
    bullets: [
      "Live running balance updated instantaneously upon invoice generation or payment",
      "Age-wise receivables analysis to pinpoint overdue balances before they become bad debts",
      "One-click 'Settle Balance' button to clear full or partial balances with receipts",
    ],
    ctaText: "Track Customer Ledgers",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    statBadge: { label: "Receivables Tracking", value: "Real-Time" },
    gradientAccent: "bg-amber-600",
    imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: "cust-3",
    stepNumber: "03",
    badge: "PAYMENT RECOVERY",
    title: "Automated WhatsApp Payment Reminders with 1-Tap UPI",
    description:
      "Recover outstanding dues 3x faster without uncomfortable phone calls. Send automated, polite WhatsApp payment reminders with an embedded 1-tap UPI link that allows customers to pay immediately.",
    bullets: [
      "Automated reminder triggers (before due date, on due date, and when overdue)",
      "Embedded dynamic UPI QR code allows customers to pay in one tap from WhatsApp",
      "Customer ledger updates automatically with thank-you confirmation upon payment",
    ],
    ctaText: "Automate Reminders",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    statBadge: { label: "Payment Recovery", value: "3x Faster" },
    gradientAccent: "bg-emerald-600",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=85",
  },
];

export const VENDOR_STACKING_CARDS: StackingCardItem[] = [
  {
    id: "ven-1",
    stepNumber: "01",
    badge: "PROCUREMENT AUTOMATION",
    title: "1-Click Purchase Orders & Safety Stock Restocking",
    description:
      "Streamline inventory replenishment from suppliers. Generate itemized Purchase Orders (PO) with agreed vendor rates, tax components, and delivery terms, dispatched via email or WhatsApp in one tap.",
    bullets: [
      "Auto-generates POs based on reorder points and supplier lead time formulas",
      "Maintains vendor-wise agreed contract prices and applicable tax slabs",
      "Tracks PO approval lifecycles (Draft, Sent, Confirmed, Inwarded)",
    ],
    ctaText: "Generate Purchase Order",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    statBadge: { label: "Procurement Cycle", value: "-65% Time" },
    gradientAccent: "bg-purple-600",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: "ven-2",
    stepNumber: "02",
    badge: "GOODS INWARD AUDIT",
    title: "Goods Receipt Notes (GRN) with 3-Way Invoice Matching",
    description:
      "Protect your business against damaged or short-delivered goods. Inspect incoming warehouse stock against original Purchase Orders before booking bills, eliminating billing disputes.",
    bullets: [
      "Physical stock verification against ordered items before approving vendor payment",
      "Logs damaged, short, or rejected units with instant debit note generation",
      "Automatically increments available warehouse inventory upon GRN sign-off",
    ],
    ctaText: "Explore GRN System",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    statBadge: { label: "Delivery Precision", value: "100%" },
    gradientAccent: "bg-blue-600",
    imageUrl: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: "ven-3",
    stepNumber: "03",
    badge: "TAX CREDIT PROTECTION",
    title: "100% GSTR-2B Input Tax Credit (ITC) Reconciliation",
    description:
      "Never lose Input Tax Credit because a vendor forgot to upload their invoices. Vinimay compares your recorded purchase bills with auto-populated GSTR-2B data to catch missing credits before filing.",
    bullets: [
      "Automated comparison of recorded purchase tax against official GSTR-2B entries",
      "Flags defaulting vendors and invoice amount mismatches in real time",
      "Withhold tax payment until the vendor uploads the bill to the government portal",
    ],
    ctaText: "Reconcile GSTR-2B",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    statBadge: { label: "ITC Loss Prevented", value: "100%" },
    gradientAccent: "bg-emerald-600",
    imageUrl: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&auto=format&fit=crop&q=85",
  },
];

export const TRANSACTION_STACKING_CARDS: StackingCardItem[] = [
  {
    id: "txn-1",
    stepNumber: "01",
    badge: "DOUBLE-ENTRY BOOKS",
    title: "Chronological Double-Entry Daybook & Balanced Ledgers",
    description:
      "Keep your accounting books in pristine, audit-ready balance. Vinimay records every sale, purchase, expense, and transfer in a real-time daybook where debits and credits match to the exact paisa.",
    bullets: [
      "Real-time debit/credit verification check prevents unbalanced voucher entries",
      "Filters by date range, transaction type (Sales, Purchase, Contra), or cashier shift",
      "Summary totals of daily cash inflow, outflow, and net closing cashbook balance",
    ],
    ctaText: "View Daybook",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    statBadge: { label: "Trial Balance Match", value: "100.00%" },
    gradientAccent: "bg-purple-600",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: "txn-2",
    stepNumber: "02",
    badge: "STATEMENT MATCHING",
    title: "Automated Bank Statement CSV Reconciliation",
    description:
      "Reconcile multiple current accounts in minutes instead of days. Upload your bank statement CSV and Vinimay auto-matches bank deposits and withdrawals with book entries using UTR and cheque references.",
    bullets: [
      "Auto-matches bank statement rows with recorded invoices and vendor payouts",
      "Instantly identifies unpresented cheques, pending deposits, and bank fee deductions",
      "One-click reconciliation confirms exact parity between bank and book balance",
    ],
    ctaText: "Reconcile Bank Accounts",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    statBadge: { label: "Reconciliation Variance", value: "₹0.00" },
    gradientAccent: "bg-indigo-600",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: "txn-3",
    stepNumber: "03",
    badge: "REGULATORY COMPLIANCE",
    title: "MCA-Compliant Immutable Audit Trail & Activity Logging",
    description:
      "Fully satisfy statutory Ministry of Corporate Affairs (MCA) audit trail mandates. Every single transaction creation, modification, or cancellation is permanently logged with user ID, IP, and timestamp.",
    bullets: [
      "Tamper-proof chronological log recording before-and-after values for every edited field",
      "Captures logged-in user, branch terminal, client IP address, and exact timestamp",
      "Audit-ready compliance reports ready for Chartered Accountants and tax authorities",
    ],
    ctaText: "Check Audit Standards",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    statBadge: { label: "Audit Compliance", value: "MCA Certified" },
    gradientAccent: "bg-emerald-600",
    imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=85",
  },
];
