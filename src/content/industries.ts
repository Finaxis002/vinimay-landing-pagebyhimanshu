export interface IndustryData {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  bullets: string[];
  previewTitle: string;
  statValue: string;
  statDesc: string;
}

export const INDUSTRY_DATA: Record<string, IndustryData> = {
  restaurants: {
    id: "restaurants",
    title: "Restaurants & Cafes – Table POS & Recipe Stock",
    subtitle:
      "Simplify your table billing, track kitchen tickets instantly, and automatically deduct raw ingredients whenever dishes are ordered.",
    cta: "Explore Restaurant POS",
    bullets: [
      "Recipe-level raw stock deduction on every order",
      "Instant Kitchen Order Ticket (KOT) printing",
      "Seamless Zomato and Swiggy order synchronization",
      "Zero monthly software or terminal fees",
    ],
    previewTitle: "Restaurant POS & KDS Screen",
    statValue: "18%",
    statDesc:
      "Drop in food cost variance & unrecorded wastage in the first month with Vinimay recipe deduction.",
  },
  gyms: {
    id: "gyms",
    title: "Gyms & Fitness & Member Billing",
    subtitle:
      "Connect physical turnstile barrier gates directly to member expiry dates. Eliminate unpaid walk-ins and compute trainer payouts in 1 click.",
    cta: "Explore Gym Module",
    bullets: [
      "Direct gym-turnstile-bridge hardware integration",
      "Automated barrier lock on membership expiry",
      "UPI autopay & recurring subscription billing",
      "1-click trainer commission payouts",
    ],
    previewTitle: "Gym Turnstile & Attendance Screen",
    statValue: "100%",
    statDesc:
      "Elimination of unauthorized gym entries overnight with automated RFID barrier gate synchronization.",
  },
  transport: {
    id: "transport",
    title: "Transport & Logistics – Route Distance & Trip Billing",
    subtitle:
      "Calculate exact highway route kilometers using built-in Google Maps, log driver advances, fuel allowances, and generate final trip freight invoices.",
    cta: "Explore Trips Module",
    bullets: [
      "Built-in Google Maps route distance calculation",
      "Suggested fuel allowance & toll charge logging",
      "Instant single-click freight invoice generation",
      "Driver trip sheets & advance balance tracking",
    ],
    previewTitle: "Trips & Freight Screen",
    statValue: "11 Days",
    statDesc:
      "Faster freight trip settlement and zero dispute billing across highway haulage routes.",
  },
  manufacturing: {
    id: "manufacturing",
    title: "Manufacturing – Bill of Materials & Scrap Tracking",
    subtitle:
      "Track production batch orders from raw material to finished goods. Monitor scrap percentages and unit production costs in real time.",
    cta: "Explore BOM Module",
    bullets: [
      "Multi-level Bill of Materials (BOM) creation",
      "Batch production orders with raw stock deduction",
      "Scrap & wastage percentage tracking",
      "Accurate landed cost per finished unit",
    ],
    previewTitle: "Manufacturing BOM Screen",
    statValue: "99.2%",
    statDesc:
      "Material yield accuracy across production batches with automated scrap and batch tracking.",
  },
  retail: {
    id: "retail",
    title: "Shops & Retail – Fast Barcode Billing & Party Ledgers",
    subtitle:
      "Lightning-fast counter checkout with barcode scanner support, automated low-stock reorder warnings, and instant WhatsApp PDF invoices.",
    cta: "Explore Retail POS",
    bullets: [
      "0.3s rapid barcode scanning & thermal printing",
      "Instant tax invoice dispatch on customer WhatsApp",
      "Party-wise ledger aging & outstanding reminders",
      "Works 100% offline with background cloud sync",
    ],
    previewTitle: "Retail POS Billing Screen",
    statValue: "0.8s",
    statDesc:
      "Average invoice generation and WhatsApp delivery time right at the checkout counter.",
  },
  properties: {
    id: "properties",
    title: "Property and Rentals – Leases & Utility Billing",
    subtitle:
      "Automate tenant rent collection, electricity and water sub-meter utility calculation, and WhatsApp payment reminders.",
    cta: "Explore Properties Module",
    bullets: [
      "Automated monthly rent invoice dispatch on WhatsApp",
      "Sub-meter electricity and water utility calculating engine",
      "Unit vacancy registries & lease duration tracking",
      "Zero commission or third-party portal fees",
    ],
    previewTitle: "Property Lease & Rent Screen",
    statValue: "100%",
    statDesc:
      "Timely tenant rent reconciliation and automated WhatsApp payment reminders with integrated UPI QR codes.",
  },
};
