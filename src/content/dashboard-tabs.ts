export interface DashboardTab {
  id: string;
  tabLabel: string;
  screenTitle: string;
  heading: string;
  desc: string;
  ctaText: string;
  badgeText: string;
  iconName: string;
}

export const DASHBOARD_TABS: Record<string, DashboardTab> = {
  poss: {
    id: "poss",
    tabLabel: "Pos",
    screenTitle: "Restaurant POS & KOT",
    heading: "Point of Sale built for lightning-fast billing.",
    desc: "Table layout, live POS, kitchen order tickets, Zomato & Swiggy orders, and barcode counter checkout.",
    ctaText: "Explore POS",
    badgeText: "Fast Counter & Dining Terminal",
    iconName: "utensils",
  },
  attendo: {
    id: "attendo",
    tabLabel: "Attendo",
    screenTitle: "Staff & Gym Attendance",
    heading: "Smart attendance, member access.",
    desc: "Seamless physical barrier gate synchronization, employee shift attendance, and automatic member expiry lock.",
    ctaText: "Explore Attendo",
    badgeText: "RFID & Biometric Sync Engine",
    iconName: "users",
  },
  invoice: {
    id: "invoice",
    tabLabel: "Invoice",
    screenTitle: "GST & VAT Invoicing",
    heading: "Create GST & VAT invoices in under 60 seconds.",
    desc: "Fast tax invoicing, automated WhatsApp PDF dispatch, party ledger aging, and complete accounts reconciliation.",
    ctaText: "Explore Invoice",
    badgeText: "Tax & WhatsApp Invoicing Engine",
    iconName: "file-text",
  },
  inventory: {
    id: "inventory",
    tabLabel: "Inventory",
    screenTitle: "Inventory & Stock Control",
    heading: "Real-time stock tracking and wastage control.",
    desc: "Product catalogs, cost vs selling prices, batch tracking, and automated recipe-level stock deductions.",
    ctaText: "Explore Inventory",
    badgeText: "Real-Time Stock & Batch Manager",
    iconName: "boxes",
  },
  properties: {
    id: "properties",
    tabLabel: "Properties",
    screenTitle: "Properties Portfolio",
    heading: "Units, tenant leases, recurring rent & utility billing.",
    desc: "Automate monthly tenant rent invoices, metered electricity and water utilities, and unit vacancy registries.",
    ctaText: "Explore Properties",
    badgeText: "Lease, Rent & Utility Manager",
    iconName: "building",
  },
};
