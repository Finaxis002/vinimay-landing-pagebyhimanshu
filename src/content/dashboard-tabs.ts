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
  dashboard: {
    id: "dashboard",
    tabLabel: "Dashboard",
    screenTitle: "Main Business Dashboard",
    heading: "Complete multi-company business snapshot.",
    desc: "Consolidated sales, purchases, active users, company entities, and instant quick action triggers.",
    ctaText: "Explore Dashboard",
    badgeText: "Real-Time Overview & Cashflow",
    iconName: "layout-dashboard",
  },
  companies: {
    id: "companies",
    tabLabel: "Companies",
    screenTitle: "Multi-Company Registry",
    heading: "Manage all your business entities in one place.",
    desc: "Centralize sole proprietorships, GST registrations, addresses, and multi-business compliance.",
    ctaText: "Explore Companies",
    badgeText: "Multi-Entity Manager",
    iconName: "building-2",
  },
  invoice: {
    id: "invoice",
    tabLabel: "Invoice",
    screenTitle: "GST & Tax Invoice Preview",
    heading: "Create GST & VAT invoices in under 60 seconds.",
    desc: "Fast tax invoicing, customizable PDF templates, automated WhatsApp dispatch, and QR code payments.",
    ctaText: "Explore Invoicing",
    badgeText: "Tax & WhatsApp Invoicing Engine",
    iconName: "file-text",
  },
  attendo: {
    id: "attendo",
    tabLabel: "Gym & Fitness",
    screenTitle: "Gym Attendance & Footfall",
    heading: "Smart attendance, member access & admissions.",
    desc: "Hourly footfall heatmaps, quick short member code attendance, employee shifts, and automatic expiry locks.",
    ctaText: "Explore Gym & Fitness",
    badgeText: "Footfall & Member Engine",
    iconName: "users",
  },
  poss: {
    id: "poss",
    tabLabel: "Restaurant",
    screenTitle: "Restaurant & Cafe Menu",
    heading: "Point of Sale & Menu Management built for speed.",
    desc: "Dish categories, live menu toggles, variants, recipe stock deductions, and multi-station kitchen routing.",
    ctaText: "Explore Restaurant POS",
    badgeText: "Menu & Kitchen Terminal",
    iconName: "utensils",
  },
  inventory: {
    id: "inventory",
    tabLabel: "Inventory",
    screenTitle: "Inventory & Warehousing",
    heading: "Real-time stock tracking and SKU catalogs.",
    desc: "Product catalogs, cost vs selling prices, barcodes, batch tracking, and automated recipe deductions.",
    ctaText: "Explore Inventory",
    badgeText: "Real-Time Stock & Batch Manager",
    iconName: "boxes",
  },
  properties: {
    id: "properties",
    tabLabel: "Properties",
    screenTitle: "Properties & Real Estate",
    heading: "Units, projects, valuations & sold portfolios.",
    desc: "Real estate project units, carpet area valuation, vacancy tracking, and automated recurring billing.",
    ctaText: "Explore Properties",
    badgeText: "Lease, Rent & Valuation Manager",
    iconName: "building",
  },
  users: {
    id: "users",
    tabLabel: "Users",
    screenTitle: "User Accounts & Access Control",
    heading: "Team members, roles, and company assignments.",
    desc: "Secure login portals, multi-company user links, role-based access, and client invitations.",
    ctaText: "Explore User Management",
    badgeText: "Access & Team Control",
    iconName: "users",
  },
};
