export interface CapabilityItem {
  number: string;
  title: string;
  description: string;
}

export interface WorkflowStepItem {
  id: string;
  badgeTime: string;
  badgeTag: string;
  title: string;
  category: string;
  previewVariant: "catalog" | "inventory" | "billing" | "parties" | "reports";
}

export interface IndustryPageData {
  id: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    badge: string;
    title: string;
    lead: string;
    trustChips: string[];
    windowTitle?: string;
    windowSubtitle: string;
    badgeCode: string;
    customerName: string;
    customerGstin: string;
    chips: string[];
  };
  capabilities: {
    headline: string;
    items: CapabilityItem[];
  };
  workflow: {
    titlePrefix: string;
    handwrittenScript: string;
    titleSuffix: string;
    subtitle: string;
    steps: WorkflowStepItem[];
  };
}

export const INDUSTRY_PAGES: Record<string, IndustryPageData> = {
  courier: {
    id: "courier",
    meta: {
      title: "Courier & Parcel Delivery Software – Volumetric Weight & Billing | Vinimay",
      description:
        "Manage sender and receiver party details, automated volumetric weight (L × W × H) calculation, courier extra charges, SAC 996812, and instant WhatsApp billing.",
      keywords: ["courier billing software", "volumetric weight calculator", "courier invoice software", "parcel billing India", "SAC 996812 invoice"],
    },
    hero: {
      badge: "Courier & Parcel Services",
      title: "Volumetric Weight Calculation & Dedicated Courier Invoicing",
      lead: "Specialized courier sales forms with complete sender and receiver address details, automated L × W × H volumetric weight calculation, and instant WhatsApp invoice delivery.",
      trustChips: ["📐 Auto Volumetric Weight (L × W × H)", "📋 Complete Sender & Receiver Profiles", "⚡ SAC 996812 GST Ready"],
      windowSubtitle: "/ Courier Sales Form",
      badgeCode: "COUR-2026",
      customerName: "Blue Express Courier Counter",
      customerGstin: "✓ Sender & Receiver Verified",
      chips: ["Sender Details Filled", "Volumetric: 3.2 kg", "Rate per kg Applied", "WhatsApp Bill Sent"],
    },
    capabilities: {
      headline: "Built specifically around Vinimay's dedicated Courier Industry Type and sales form.",
      items: [
        { number: "01", title: "Automated Volumetric Weight", description: "Enter parcel length, breadth, and height in cm. The system automatically calculates volumetric weight to compare against actual weight." },
        { number: "02", title: "Sender & Receiver Records", description: "Capture complete party details including sender name, contact, address, state, city, pincode, and optional GSTIN." },
        { number: "03", title: "Multi-Parcel Consignments", description: "Add multiple package lines with individual weights, dimensions, and per-kg rates in a single transaction." },
        { number: "04", title: "Custom Extra Charges", description: "Add docket fees, pickup charges, packing costs, and fuel surcharges alongside standard parcel freight." },
        { number: "05", title: "SAC 996812 GST Invoicing", description: "Pre-configured with statutory courier SAC code 996812 and automatic multi-rate GST tax calculations." },
        { number: "06", title: "1-Click WhatsApp Invoices", description: "Share PDF invoices directly to customer and sender WhatsApp numbers with attached payment links." },
      ],
    },
    workflow: {
      titlePrefix: "How courier billing works",
      handwrittenScript: "in 5 steps",
      titleSuffix: "",
      subtitle: "From package intake and dimension entry to automated volumetric calculation and tax invoice.",
      steps: [
        { id: "Step-1", badgeTime: "Step 1", badgeTag: "INTAKE", title: "Select Courier Company & Customer", category: "COURIER INDUSTRY TYPE • BOOKING DATE • BANK", previewVariant: "catalog" },
        { id: "Step-2", badgeTime: "Step 2", badgeTag: "ADDRESS", title: "Fill Sender & Receiver Details", category: "CONTACT • FULL ADDRESS • PINCODE • GSTIN", previewVariant: "parties" },
        { id: "Step-3", badgeTime: "Step 3", badgeTag: "DIMENSIONS", title: "Enter Parcel Weight & L × W × H", category: "AUTO VOLUMETRIC WEIGHT • RATE PER KG", previewVariant: "inventory" },
        { id: "Step-4", badgeTime: "Step 4", badgeTag: "CHARGES", title: "Add Extra Charges & SAC 996812", category: "DOCKET SURCHARGE • GST % • DISCOUNT", previewVariant: "billing" },
        { id: "Step-5", badgeTime: "Step 5", badgeTag: "INVOICE", title: "Save & Send WhatsApp PDF Invoice", category: "DYNAMIC UPI QR • LEDGER UPDATED • REPORTS", previewVariant: "reports" },
      ],
    },
  },

  marbles: {
    id: "marbles",
    meta: {
      title: "Marble, Granite & Tiles Billing Software – Sq. Ft. Calculator | Vinimay",
      description:
        "Specialized marble industry billing with multi-row slab size entries (length × width), automatic square feet calculation, truck numbers, and transport details.",
      keywords: ["marble billing software", "granite tile billing", "sq ft billing software", "marble size row calculator", "marble invoice with truck no"],
    },
    hero: {
      badge: "Marble, Granite & Stone",
      title: "Multi-Row Slab Dimension Entries & Square Feet Billing",
      lead: "Tailored for marble traders and stone yards. Enter slab length and width to auto-calculate total square feet, and attach truck numbers, transporters, and e-way bills.",
      trustChips: ["📏 Multi-Row Slab Size Calculator", "🚛 Truck No. & Transport Fields", "📐 Flexible Units: Sq. Ft. & Sq. Mtr."],
      windowSubtitle: "/ Marble Transaction Form",
      badgeCode: "MRBL-8921",
      customerName: "Royal Marble & Granites",
      customerGstin: "✓ Truck: RJ-14-GA-9021",
      chips: ["3 Size Rows Added", "Total: 1,420 Sq. Ft.", "Transporter Linked", "E-Way Bill Logged"],
    },
    capabilities: {
      headline: "Engineered around Vinimay's dedicated Marble Industry Type and dimension calculation engine.",
      items: [
        { number: "01", title: "Multi-Row Size Entries", description: "Add multiple slab size rows with individual length, width, and quantity. Total square feet is calculated automatically." },
        { number: "02", title: "Auto Sq. Ft. & Amount Math", description: "Enter rate per sq. ft. and the system multiplies total square feet seamlessly, eliminating calculation errors." },
        { number: "03", title: "Truck & Transport Metadata", description: "Record Truck Number, Transporter Name, Bill of Lading, and E-Way Bill Number directly on the transaction." },
        { number: "04", title: "Flexible Stone Units", description: "Configurable company-level marble units supporting Square Feet (sq. ft) and Square Meters (sq. mtr)." },
        { number: "05", title: "Separate Shipping Addresses", description: "Keep billing address or specify a distinct unloading site or godown shipping address per delivery." },
        { number: "06", title: "Copy & Duplicate Slabs", description: "Duplicate complex multi-row slab product entries with 1 click to speed up high-volume truck dispatch." },
      ],
    },
    workflow: {
      titlePrefix: "How marble billing works",
      handwrittenScript: "in 5 steps",
      titleSuffix: "",
      subtitle: "From measuring slab dimensions to attaching transport details and issuing the final tax bill.",
      steps: [
        { id: "Step-1", badgeTime: "Step 1", badgeTag: "SETUP", title: "Select Marble Company & Customer", category: "MARBLE INDUSTRY TYPE • AUTO SIZE FORM ACTIVATED", previewVariant: "catalog" },
        { id: "Step-2", badgeTime: "Step 2", badgeTag: "SIZES", title: "Add Size Rows (Length × Width)", category: "QUANTITY • AUTO SQ. FT. CALCULATION • RATE", previewVariant: "inventory" },
        { id: "Step-3", badgeTime: "Step 3", badgeTag: "TRANSPORT", title: "Enter Truck No. & E-Way Bill", category: "TRANSPORTER NAME • BILL OF LADING • DISPATCH", previewVariant: "billing" },
        { id: "Step-4", badgeTime: "Step 4", badgeTag: "TAXATION", title: "Review HSN, GST & Total Amount", category: "CGST/SGST SPLIT • ROUND OFF • DISCOUNT", previewVariant: "parties" },
        { id: "Step-5", badgeTime: "Step 5", badgeTag: "DISPATCH", title: "Print Invoice & Send on WhatsApp", category: "GATE PASS READY • PARTY LEDGER POSTED", previewVariant: "reports" },
      ],
    },
  },

  travels: {
    id: "travels",
    meta: {
      title: "Travel Agency & Cab Booking Billing Software – SAC 9985 | Vinimay",
      description:
        "Dedicated travel sales forms with travel dates, routes (From - To), vehicle types, fixed charges, variable per-km rates, toll/parking charges, and SAC 9985.",
      keywords: ["travel billing software", "cab booking invoice", "tour travel invoice", "SAC 9985 GST billing", "per km travel billing"],
    },
    hero: {
      badge: "Travels & Passenger Vehicle Hire",
      title: "Route Details, Vehicle Bookings & Fixed + Per-Km Travel Invoicing",
      lead: "Built for tour operators and car rental businesses. Manage single or date-range travel, routes (From - To), vehicle numbers, fixed + per-km charges, and toll/parking fees.",
      trustChips: ["🛣️ From - To Route & Date Range", "⚡ Fixed Charges + Variable Per-Km", "🅿️ Toll, Parking & Overnight Fees"],
      windowSubtitle: "/ Travel Transaction Form",
      badgeCode: "TRVL-504",
      customerName: "Golden Triangle Passenger Trip",
      customerGstin: "✓ Vehicle: Innova Crysta (RJ-14-TC-88)",
      chips: ["Route: Delhi → Agra", "Fixed: ₹4,500", "Variable: 210 Km @ ₹14", "Tolls Added: ₹650"],
    },
    capabilities: {
      headline: "Powered by Vinimay's dedicated Travel Industry Type with specialized passenger route billing.",
      items: [
        { number: "01", title: "Route & Date Management", description: "Record travel route (From and To) with support for single travel dates or multi-day travel date ranges." },
        { number: "02", title: "Vehicle & Driver Logging", description: "Specify vehicle type (Sedan, SUV, Bus), vehicle number, driver name, and driver contact number." },
        { number: "03", title: "Fixed + Per-Km Pricing", description: "Bill a fixed package fee or combine fixed charges with variable kilometers (variable rate × km quantity)." },
        { number: "04", title: "Tolls, Parking & Night Charges", description: "Dedicated line items for toll tax, parking charges, waiting fees, and driver overnight allowances." },
        { number: "05", title: "Return Trip Option", description: "Easily mark one-way drops or round trips with automated return trip distance adjustments." },
        { number: "06", title: "SAC 9985 Travel GST", description: "Pre-configured with statutory passenger transport SAC code 9985 and multi-rate GST calculations." },
      ],
    },
    workflow: {
      titlePrefix: "How travel billing works",
      handwrittenScript: "in 5 steps",
      titleSuffix: "",
      subtitle: "From booking the passenger itinerary to calculating km charges and issuing the final GST invoice.",
      steps: [
        { id: "Step-1", badgeTime: "Step 1", badgeTag: "BOOKING", title: "Select Travel Company & Customer", category: "TRAVEL INDUSTRY TYPE • BANK • PAYMENT METHOD", previewVariant: "catalog" },
        { id: "Step-2", badgeTime: "Step 2", badgeTag: "ROUTE", title: "Set Date of Travel & From / To Route", category: "SINGLE DATE / DATE RANGE • RETURN TRIP TOGGLE", previewVariant: "inventory" },
        { id: "Step-3", badgeTime: "Step 3", badgeTag: "VEHICLE", title: "Enter Vehicle Type & Driver Info", category: "VEHICLE NUMBER • DRIVER CONTACT • TRANSPORTER", previewVariant: "parties" },
        { id: "Step-4", badgeTime: "Step 4", badgeTag: "CHARGES", title: "Add Fixed Charges, Per-Km & Tolls", category: "KM QUANTITY × RATE • TOLL TAX • OVERNIGHT FEE", previewVariant: "billing" },
        { id: "Step-5", badgeTime: "Step 5", badgeTag: "INVOICE", title: "Generate SAC 9985 GST Invoice", category: "WHATSAPP PDF DISPATCH • LEDGER UPDATED", previewVariant: "reports" },
      ],
    },
  },

  transportation: {
    id: "transportation",
    meta: {
      title: "Transport & Logistics Software – Trips & Freight Invoicing | Vinimay",
      description:
        "Dedicated Trips module for transport companies. Manage vehicles, drivers, trip sheets, cargo weight, freight rates, diesel/toll expenses, and trip invoices.",
      keywords: ["transport billing software", "trip management software", "trip sheet software", "freight invoice software", "driver advance software"],
    },
    hero: {
      badge: "Transport, Cargo & Fleet Haulage",
      title: "Dedicated Trips Section, Trip Sheets & Freight Invoices",
      lead: "A full-featured Trips module for transport companies. Record vehicles, drivers, consignor/consignee, cargo weight, freight rates, diesel expenses, and generate trip invoices.",
      trustChips: ["🚚 Dedicated Sidebar Trips Module", "⛽ Diesel, Toll & Driver Advances", "📄 1-Click Trip Invoice Generation"],
      windowSubtitle: "/ Trips Management Module",
      badgeCode: "TRIP-9021",
      customerName: "National Highway Logistics",
      customerGstin: "✓ Trip Sheet #TS-8842 Active",
      chips: ["Route: Mumbai → Delhi", "Cargo: Steel Coils (22 Tons)", "Diesel: ₹14,200 Logged", "Trip Invoice Created"],
    },
    capabilities: {
      headline: "Powered by Vinimay's built-in Trips Module and dedicated Transport Models.",
      items: [
        { number: "01", title: "Dedicated Trips Module", description: "Trip/Transport companies get a dedicated Trips section in the sidebar to create and track all haulage trips." },
        { number: "02", title: "Vehicle & Driver Registry", description: "Register fleet vehicles and drivers with license details, contacts, and validity dates in Settings." },
        { number: "03", title: "Party Consignor & Consignee", description: "Capture complete snapshot details for both the sender (consignor) and recipient (consignee) per trip." },
        { number: "04", title: "Cargo Details & Freight Rates", description: "Log cargo type, weight, weight unit (Tons/Kg), freight rates, and loading/unloading/detention charges." },
        { number: "05", title: "Diesel & Trip Expense Logs", description: "Record trip expenses including diesel fuel slips, toll charges, driver cash advances, and maintenance." },
        { number: "06", title: "1-Click Trip Invoices", description: "Convert completed trip sheets directly into formal Trip Invoices with automated freight tax calculations." },
      ],
    },
    workflow: {
      titlePrefix: "How trip management works",
      handwrittenScript: "in 5 steps",
      titleSuffix: "",
      subtitle: "From dispatching the truck to logging highway expenses and generating the trip freight invoice.",
      steps: [
        { id: "Step-1", badgeTime: "Step 1", badgeTag: "TRIP SHEET", title: "Add Trip in Trips Section", category: "SELECT TRANSPORT COMPANY • ASSIGN VEHICLE & DRIVER", previewVariant: "catalog" },
        { id: "Step-2", badgeTime: "Step 2", badgeTag: "ROUTE", title: "Enter Route & Consignor / Consignee", category: "FROM / TO • CARGO TYPE • CARGO WEIGHT", previewVariant: "inventory" },
        { id: "Step-3", badgeTime: "Step 3", badgeTag: "FREIGHT", title: "Set Freight Rate & Extra Charges", category: "LOADING • UNLOADING • DETENTION CHARGES", previewVariant: "billing" },
        { id: "Step-4", badgeTime: "Step 4", badgeTag: "EXPENSES", title: "Log Diesel Slips & Driver Advance", category: "TOLL SLIPS • FASTAG • NET DRIVER EARNINGS", previewVariant: "parties" },
        { id: "Step-5", badgeTime: "Step 5", badgeTag: "INVOICE", title: "Create Formal Trip Invoice", category: "TRIP INVOICES TAB • GST BILL • WHATSAPP PDF", previewVariant: "reports" },
      ],
    },
  },

  manufacturing: {
    id: "manufacturing",
    meta: {
      title: "Manufacturing Software – Bill of Materials & Production | Vinimay",
      description:
        "Create multi-component Bill of Materials (BOM), record factory production entries with raw material stock deduction, and track production history.",
      keywords: ["manufacturing ERP software", "BOM software", "production entry software", "finished goods stock", "raw material deduction"],
    },
    hero: {
      badge: "Manufacturing & Production",
      title: "Bill of Materials (BOM) & Factory Production Recording",
      lead: "Define raw material recipes with Bill of Materials (BOM). Record production batches in Inventory with 1 click to auto-deduct raw materials and inward finished stock.",
      trustChips: ["⚙️ Product BOM Recipe Builder", "🔨 1-Click Inventory Production", "📦 Raw Stock Deduct & Finished Add"],
      windowSubtitle: "/ Inventory Production Desk",
      badgeCode: "BOM-PROD-01",
      customerName: "Precision Manufacturing Works",
      customerGstin: "✓ Production Confirmed (50 Units)",
      chips: ["BOM Defined", "Raw Materials Shortage Check", "50 Units Finished Inwarded", "Stock History Logged"],
    },
    capabilities: {
      headline: "Built directly on Vinimay's ProductBOM and ProductionEntry architecture.",
      items: [
        { number: "01", title: "Bill of Materials (BOM) Setup", description: "Link finished products with exact required quantities of raw material components and sub-assemblies." },
        { number: "02", title: "1-Click Production in Inventory", description: "Click the hammer icon next to any manufactured product in Inventory to record a new production run." },
        { number: "03", title: "Automated Raw Material Deduction", description: "Consumed raw materials are automatically deducted from godown stock based on the predefined BOM recipe." },
        { number: "04", title: "Instant Finished Goods Inwarding", description: "Manufactured finished items are instantly credited to your live inventory with updated batch codes." },
        { number: "05", title: "Raw Material Shortage Warnings", description: "Get instant alerts before confirming production if available raw material stock is insufficient." },
        { number: "06", title: "Production History & Reversals", description: "View complete chronological logs of all past production batches with the ability to cancel and restore stock." },
      ],
    },
    workflow: {
      titlePrefix: "How production works",
      handwrittenScript: "in 5 steps",
      titleSuffix: "",
      subtitle: "From defining product BOM components to executing production runs and updating live stock.",
      steps: [
        { id: "Step-1", badgeTime: "Step 1", badgeTag: "BOM RECIPE", title: "Define Product BOM in Inventory", category: "SELECT FINISHED GOOD • LINK RAW MATERIALS & QTYS", previewVariant: "catalog" },
        { id: "Step-2", badgeTime: "Step 2", badgeTag: "RECORD", title: "Click Production Hammer Icon", category: "ENTER OUTPUT QUANTITY • SELECT PRODUCTION DATE", previewVariant: "inventory" },
        { id: "Step-3", badgeTime: "Step 3", badgeTag: "SHORTAGE", title: "Verify Raw Material Availability", category: "STOCK SHORTAGE WARNING • QC APPROVAL", previewVariant: "parties" },
        { id: "Step-4", badgeTime: "Step 4", badgeTag: "CONFIRM", title: "Confirm Production Run", category: "RAW STOCK DEDUCTED • FINISHED GOODS INWARDED", previewVariant: "billing" },
        { id: "Step-5", badgeTime: "Step 5", badgeTag: "HISTORY", title: "Review Production History", category: "CONSUMED MATERIALS AUDIT • CANCEL/RESTORE OPTION", previewVariant: "reports" },
      ],
    },
  },

  properties: {
    id: "properties",
    meta: {
      title: "Real Estate & Property Management Software – Units & RERA | Vinimay",
      description:
        "Manage real estate property inventory, projects, towers, unit types (1-5 BHK, plots, shops), carpet area, rate per sq. ft., RERA numbers, and 5% GST billing.",
      keywords: ["real estate billing software", "property inventory software", "builder billing software", "real estate unit booking", "property RERA software"],
    },
    hero: {
      badge: "Real Estate, Builders & Properties",
      title: "Property Inventory, Project Towers & Real Estate Billing",
      lead: "Built for real estate developers and property builders. Track projects, towers, unit numbers, BHK types, carpet area, rate per sq. ft., RERA numbers, and booking status.",
      trustChips: ["🏢 Projects, Towers & Unit Numbers", "📐 Carpet Area & Rate Per Sq. Ft.", "📋 RERA Number & Milestone Invoices"],
      windowSubtitle: "/ Properties Module",
      badgeCode: "PROP-UNIT-402",
      customerName: "Aman Heights Luxury Towers",
      customerGstin: "✓ Status: Available • 3 BHK",
      chips: ["Carpet Area: 1,450 Sq. Ft.", "Rate: ₹6,500/Sq. Ft.", "RERA: P-BPL-24-9021", "Parking & PLC Configured"],
    },
    capabilities: {
      headline: "Directly powered by Vinimay's dedicated Property Model and Real Estate transaction engine.",
      items: [
        { number: "01", title: "Project & Tower Architecture", description: "Organize properties under named Projects, Towers, Floors, and individual Unit Numbers seamlessly." },
        { number: "02", title: "Comprehensive Unit Types", description: "Built-in support for 1 BHK, 2 BHK, 3 BHK, 4 BHK, 5 BHK, Studio Apartments, Penthouses, Villas, Plots, and Shops." },
        { number: "03", title: "Carpet & Super Built-up Area", description: "Record precise Carpet Area and Super Built-Up Area in square feet alongside Rate per Sq. Ft. pricing." },
        { number: "04", title: "RERA & Legal Compliance", description: "Store RERA registration numbers, survey numbers, facing options, and upload official floor plans and images." },
        { number: "05", title: "Parking, PLC & Club Charges", description: "Add parking charges, preferred location charges (PLC), and club membership fees into the unit cost." },
        { number: "06", title: "Real Estate 5% GST Invoicing", description: "Create real estate sales transactions with construction milestone billing and statutory 5% GST rates." },
      ],
    },
    workflow: {
      titlePrefix: "How property management works",
      handwrittenScript: "in 5 steps",
      titleSuffix: "",
      subtitle: "From listing property units to managing booking statuses and issuing milestone tax invoices.",
      steps: [
        { id: "Step-1", badgeTime: "Step 1", badgeTag: "PROJECT", title: "Create Project & Tower Details", category: "PROJECT NAME • LOCATION • RERA NUMBER", previewVariant: "catalog" },
        { id: "Step-2", badgeTime: "Step 2", badgeTag: "UNIT", title: "Add Property Units (BHK / Area)", category: "UNIT NO • CARPET AREA • SUPER BUILT-UP • RATE/SQ FT", previewVariant: "inventory" },
        { id: "Step-3", badgeTime: "Step 3", badgeTag: "CHARGES", title: "Set Parking, PLC & Selling Price", category: "PARKING TYPE • FACING • FLOOR PLAN ATTACHMENT", previewVariant: "parties" },
        { id: "Step-4", badgeTime: "Step 4", badgeTag: "STATUS", title: "Track Unit Status: Available / Sold", category: "LIVE INVENTORY STATUS • BUYER DETAILS", previewVariant: "billing" },
        { id: "Step-5", badgeTime: "Step 5", badgeTag: "INVOICE", title: "Generate 5% GST Milestone Invoice", category: "REAL ESTATE ITEM TYPE • WHATSAPP PDF BILL", previewVariant: "reports" },
      ],
    },
  },

  restaurant: {
    id: "restaurant",
    meta: {
      title: "Restaurant POS & Cafe Billing Software – KOT & Recipes | Vinimay",
      description:
        "Full-featured restaurant module with table management, wireless Kitchen Order Ticket (KOT) printing, recipe ingredient stock deduction, and cash drawer shifts.",
      keywords: ["restaurant POS software", "KOT billing software", "cafe POS system", "recipe inventory deduction", "cash drawer restaurant POS"],
    },
    hero: {
      badge: "Restaurants, Cafes & Food Outlets",
      title: "Table Billing POS, Wireless KOT & Recipe Stock Deduction",
      lead: "A complete restaurant management module. Manage table floors, fire wireless Kitchen Order Tickets (KOT) to thermal printers, auto-deduct raw recipe stock, and reconcile cash drawers.",
      trustChips: ["🍽️ Table Floor Plan Management", "🖨️ Wireless KOT Kitchen Printing", "🥕 Recipe-Level Ingredient Deduction"],
      windowSubtitle: "/ Restaurant POS Terminal",
      badgeCode: "TABLE-04",
      customerName: "Dine-in Order (Table 4)",
      customerGstin: "✓ KOT Fired to Kitchen Printer",
      chips: ["Table Selected", "Items Added to KOT", "Raw Ingredients Deducted", "5% Restaurant GST"],
    },
    capabilities: {
      headline: "Directly powered by Vinimay's dedicated Restaurant Module and KOT engine.",
      items: [
        { number: "01", title: "Table Floor Management", description: "Interactive table layout with live status indicators for vacant, occupied, running KOT, and billed tables." },
        { number: "02", title: "Wireless KOT Printing", description: "Send order tickets directly to kitchen thermal printers in sub-seconds with chef notes and item modifiers." },
        { number: "03", title: "Recipe Stock Deduction", description: "Link raw ingredients to menu dishes. Ingredients are automatically deducted from stock when dishes are ordered." },
        { number: "04", title: "Cash Drawer Shifts", description: "Track opening float cash, cash-in/cash-out entries, and daily register closing reconciliations." },
        { number: "05", title: "Staff & Waiter Terminals", description: "Dedicated employee and waiter login interfaces for fast order taking on tablets or mobile phones." },
        { number: "06", title: "Aggregator Menu Mapping", description: "Centralized menu catalog with mapping support for external delivery aggregators." },
      ],
    },
    workflow: {
      titlePrefix: "How restaurant billing works",
      handwrittenScript: "in 5 steps",
      titleSuffix: "",
      subtitle: "From seating guests and firing kitchen tickets to receipt printing and recipe deduction.",
      steps: [
        { id: "Step-1", badgeTime: "Step 1", badgeTag: "TABLE", title: "Select Table from Floor Layout", category: "DINE-IN • TAKEAWAY • DELIVERY SELECTION", previewVariant: "catalog" },
        { id: "Step-2", badgeTime: "Step 2", badgeTag: "ORDER", title: "Add Dishes & Custom Modifiers", category: "MENU CATEGORIES • ITEM SEARCH • SPECIAL NOTES", previewVariant: "inventory" },
        { id: "Step-3", badgeTime: "Step 3", badgeTag: "KOT", title: "Fire Wireless KOT to Kitchen", category: "INSTANT THERMAL TICKET • CHEF STATIONS", previewVariant: "billing" },
        { id: "Step-4", badgeTime: "Step 4", badgeTag: "RECIPE", title: "Auto-Deduct Raw Ingredients", category: "RECIPE INVENTORY ENGINE • WASTAGE CONTROL", previewVariant: "parties" },
        { id: "Step-5", badgeTime: "Step 5", badgeTag: "SETTLEMENT", title: "Print Tax Bill & Close Drawer", category: "5% RESTAURANT GST • CASH DRAWER RECONCILIATION", previewVariant: "reports" },
      ],
    },
  },

  gyms: {
    id: "gyms",
    meta: {
      title: "Gym & Fitness Software – Short Member Code Attendance & Subscriptions | Vinimay",
      description:
        "Manage gym memberships, rapid short member code attendance check-in, trainer session payouts, body measurements, and renewal alerts.",
      keywords: ["gym billing software", "member code gym attendance", "gym check-in software", "gym membership software", "trainer payout software"],
    },
    hero: {
      badge: "Gyms, Fitness Clubs & Studios",
      title: "Member Subscriptions, Short Code Attendance & Daily Check-ins",
      lead: "Built around Vinimay's dedicated Gym Module. Instant front-desk attendance using short member codes, real-time membership expiry checks, and automated trainer session payouts.",
      trustChips: ["⚡ Quick 4-Digit Member Code Check-in", "📅 Recurring Membership Plans", "💪 Trainer Commissions & Payouts"],
      windowSubtitle: "/ Gym Front Desk Terminal",
      badgeCode: "GYM-MEM-108",
      customerName: "Vikram Malhotra (Member #108)",
      customerGstin: "✓ Attendance Logged: Active",
      chips: ["Short Code #108 Checked In", "Plan Active (64 Days)", "Trainer Assigned", "WhatsApp Receipt Sent"],
    },
    capabilities: {
      headline: "Directly powered by Vinimay's Gym Module, Quick Member Check-in Terminal, and Attendance API.",
      items: [
        { number: "01", title: "Short Member Code Attendance", description: "Front-desk counter attendance terminal. Members enter their 3 or 4-digit member code to punch in within 1 second." },
        { number: "02", title: "Instant Expiry Status Check", description: "System immediately alerts the desk if the member code belongs to an expired, frozen, or overdue membership." },
        { number: "03", title: "Membership Plan Management", description: "Configure recurring memberships, duration in months, session limits, and one-time joining fees." },
        { number: "04", title: "Personal Trainer Payouts", description: "Track PT sessions completed, trainer packages, and calculate monthly trainer commission payouts." },
        { number: "05", title: "Body Measurement Tracking", description: "Log client weight, body fat %, chest, waist, and fitness milestones across monthly assessments." },
        { number: "06", title: "WhatsApp Renewal Reminders", description: "Automated WhatsApp notifications sent to members before membership expiration with renewal links." },
      ],
    },
    workflow: {
      titlePrefix: "How gym operations work",
      handwrittenScript: "in 5 steps",
      titleSuffix: "",
      subtitle: "From member registration and short code setup to daily check-ins and trainer payouts.",
      steps: [
        { id: "Step-1", badgeTime: "Step 1", badgeTag: "ONBOARD", title: "Create Member Profile & Assign Code", category: "MEMBERSHIP DURATION • SHORT MEMBER CODE • PLAN", previewVariant: "catalog" },
        { id: "Step-2", badgeTime: "Step 2", badgeTag: "CHECK-IN", title: "Front Desk Code Punch Terminal", category: "SHORT CODE CHECK-IN • INSTANT EXPIRY VERIFICATION", previewVariant: "inventory" },
        { id: "Step-3", badgeTime: "Step 3", badgeTag: "BILLING", title: "Issue Tax Invoice & WhatsApp Receipt", category: "GST TAX INVOICE • DYNAMIC UPI QR • AUTO LOG", previewVariant: "billing" },
        { id: "Step-4", badgeTime: "Step 4", badgeTag: "ATTENDANCE", title: "Daily Attendance & Expiry Tracking", category: "ATTENDANCE TERMINAL • ACTIVE MEMBER LOG", previewVariant: "parties" },
        { id: "Step-5", badgeTime: "Step 5", badgeTag: "PAYOUTS", title: "Track Trainer Sessions & Renewals", category: "TRAINER PAYOUT REPORT • RENEWAL WHATSAPP ALERTS", previewVariant: "reports" },
      ],
    },
  },

  kirana: {
    id: "kirana",
    meta: {
      title: "Kirana & Grocery POS Billing Software – Fast Barcode & Khata | Vinimay",
      description:
        "Sub-second barcode scanning, batch expiry tracking, customer Khata ledger, and thermal receipts for retail grocery and kirana stores.",
      keywords: ["kirana billing software", "grocery store POS", "barcode billing software", "supermarket POS India", "kirana khata book"],
    },
    hero: {
      badge: "Kirana, Grocery & Supermarkets",
      title: "Rapid Barcode Checkout, Customer Khata & Batch Expiry",
      lead: "Handle peak counter rushes with sub-second barcode scanning, batch number and expiry date tracking, customer credit Khata, and thermal receipt printing.",
      trustChips: ["⚡ 0.3s USB Barcode Scanning", "📅 Batch & Expiry Date Tracking", "📖 Customer Khata & WhatsApp Bills"],
      windowSubtitle: "/ Retail Counter POS",
      badgeCode: "POS-GROC-42",
      customerName: "Walk-in Customer (Counter 1)",
      customerGstin: "✓ 6 Items Scanned",
      chips: ["EAN-13 Scanned", "Batch Expiry Checked", "Split Payment (Cash + UPI)", "Thermal Receipt Printed"],
    },
    capabilities: {
      headline: "Powered by Vinimay's fast retail POS, StockBatch architecture, and Party Khata ledgers.",
      items: [
        { number: "01", title: "Fast USB & Wireless Barcode Scans", description: "Instant 0.3s product barcode scanning compatible with all handheld USB and wireless barcode guns." },
        { number: "02", title: "Batch & Expiry Date Tracking", description: "Record batch numbers, manufacturing dates, and expiry dates on purchases to prevent selling expired stock." },
        { number: "03", title: "Customer Credit (Udhaar Khata)", description: "Maintain individual customer running balances, record partial payments, and send monthly statements." },
        { number: "04", title: "Split Payments & Dynamic UPI", description: "Accept split payments (Cash + UPI + Card) and generate dynamic UPI QR codes for instantaneous checkout." },
        { number: "05", title: "Thermal Slip & A4 Invoices", description: "One-click printing on 2-inch or 3-inch thermal POS receipt printers or standard A4 invoice layouts." },
        { number: "06", title: "Low-Stock Reorder Alerts", description: "Set minimum threshold levels per product to receive automated alerts before daily staples run out." },
      ],
    },
    workflow: {
      titlePrefix: "How counter checkout works",
      handwrittenScript: "in 5 steps",
      titleSuffix: "",
      subtitle: "Keep counter lines moving fast while maintaining complete inventory and customer books.",
      steps: [
        { id: "Step-1", badgeTime: "Step 1", badgeTag: "SCAN", title: "Scan Product Barcodes at Counter", category: "0.3s BARCODE SCAN • BATCH SELECTION • AUTO MRP", previewVariant: "catalog" },
        { id: "Step-2", badgeTime: "Step 2", badgeTag: "STOCK", title: "Live Inventory Level Deduction", category: "REAL-TIME STOCK SYNC • EXPIRY DATE CHECKED", previewVariant: "inventory" },
        { id: "Step-3", badgeTime: "Step 3", badgeTag: "PAYMENT", title: "Collect Payment via Cash or UPI QR", category: "SPLIT PAYMENTS • EXACT AMOUNT DYNAMIC QR", previewVariant: "billing" },
        { id: "Step-4", badgeTime: "Step 4", badgeTag: "RECEIPT", title: "Print Thermal Slip or WhatsApp PDF", category: "3-INCH THERMAL PRINTER • AUTO CASH DRAWER", previewVariant: "parties" },
        { id: "Step-5", badgeTime: "Step 5", badgeTag: "DAY CLOSE", title: "Daily Sales Daybook & Cash Tally", category: "CLOSING BALANCE • PRODUCT-WISE SALES REPORT", previewVariant: "reports" },
      ],
    },
  },

  trading: {
    id: "trading",
    meta: {
      title: "Trading & Wholesale Billing Software – B2B Ledgers & GST | Vinimay",
      description:
        "B2B wholesale trading software with party ledger aging, purchase orders, multi-rate GST tax invoices, proforma conversions, and double-entry bookkeeping.",
      keywords: ["trading billing software", "wholesale accounting software", "B2B GST invoice software", "party ledger aging software", "distributor billing India"],
    },
    hero: {
      badge: "Wholesale & B2B Trading",
      title: "B2B Tax Invoicing, Purchase Orders & Party Ledgers",
      lead: "Manage high-volume wholesale trading with ease. Issue GST sales and proforma invoices, record supplier purchases, maintain double-entry party ledgers, and export tax reports.",
      trustChips: ["📑 Proforma to Sales 1-Click Conversion", "📊 Party Ledger & Aging Statements", "🛡️ 100% Statutory GST Tax Slabs"],
      windowSubtitle: "/ Wholesale Trading Desk",
      badgeCode: "INV-B2B-104",
      customerName: "Mahalaxmi Trading Co.",
      customerGstin: "✓ GSTIN 23AAACM1234F1Z9",
      chips: ["PO Linked", "B2B Tax Invoice Generated", "Customer Ledger Debited", "WhatsApp PDF Sent"],
    },
    capabilities: {
      headline: "Built on Vinimay's robust SalesEntry, PurchaseEntry, and double-entry Party Ledgers.",
      items: [
        { number: "01", title: "B2B Tax & Proforma Invoices", description: "Create formal GST tax invoices and proforma estimates with 1-click conversion to sales upon delivery." },
        { number: "02", title: "Supplier Purchase Tracking", description: "Record vendor purchase bills, track incoming inventory batches, and manage accounts payable." },
        { number: "03", title: "Party Ledgers & Aging Reports", description: "Maintain real-time running balances for buyers and suppliers with automated 30/60/90 days aging analysis." },
        { number: "04", title: "Payment Terms & Due Dates", description: "Assign custom credit terms (Due on Receipt, Net 15, Net 30) with automated payment reminders on WhatsApp." },
        { number: "05", title: "Double-Entry Daybook & Journals", description: "Full double-entry bookkeeping with automated journal entries, receipts, and expense vouchers." },
        { number: "06", title: "GSTR-1 & Audit Summaries", description: "Export GSTR-1 ready summaries, HSN tables, and trial balances directly for your Chartered Accountant." },
      ],
    },
    workflow: {
      titlePrefix: "How wholesale trading works",
      handwrittenScript: "in 5 steps",
      titleSuffix: "",
      subtitle: "Execute high-value B2B trade orders with verified party ledgers and statutory tax compliance.",
      steps: [
        { id: "Step-1", badgeTime: "Step 1", badgeTag: "PARTY", title: "Select Party & Verify GSTIN", category: "REGISTERED / UNREGISTERED • CREDIT TERMS SET", previewVariant: "catalog" },
        { id: "Step-2", badgeTime: "Step 2", badgeTag: "INWARD", title: "Record Supplier Purchase & Stock", category: "PURCHASE ENTRY • BATCH ALLOCATION • PAYABLES", previewVariant: "inventory" },
        { id: "Step-3", badgeTime: "Step 3", badgeTag: "INVOICE", title: "Generate Multi-Rate GST Tax Invoice", category: "RULE 46 COMPLIANT • HSN CODE • AUTO TAX SPLIT", previewVariant: "billing" },
        { id: "Step-4", badgeTime: "Step 4", badgeTag: "KHATA", title: "Update Double-Entry Party Ledger", category: "RUNNING BALANCE • 1-CLICK WHATSAPP STATEMENT", previewVariant: "parties" },
        { id: "Step-5", badgeTime: "Step 5", badgeTag: "AUDIT", title: "Review Daybook & GSTR-1 Summaries", category: "PROFIT & LOSS • TRIAL BALANCE MATCH • REPORTS", previewVariant: "reports" },
      ],
    },
  },

  service: {
    id: "service",
    meta: {
      title: "Service Business Billing Software – SAC Codes & Labor | Vinimay",
      description:
        "Manage service catalogs, SAC codes, bill services alongside physical products, track service dates, and send professional invoices on WhatsApp.",
      keywords: ["service billing software", "SAC code billing", "labor invoice software", "consulting invoice software", "repair service billing"],
    },
    hero: {
      badge: "Services, Consulting & Maintenance",
      title: "Service Catalog, SAC Codes & Professional Invoicing",
      lead: "Built for consulting firms, repair agencies, and service providers. Manage service catalogs with statutory SAC codes, bill hourly or fixed rates, and combine services with products on one bill.",
      trustChips: ["🔧 Products & Services on Single Bill", "📜 Pre-Configured SAC Codes", "📅 Service Start & Due Dates"],
      windowSubtitle: "/ Service Billing Desk",
      badgeCode: "SRV-2026",
      customerName: "Apex Technical Services",
      customerGstin: "✓ SAC: 9987 (Maintenance)",
      chips: ["Service Added", "Labor & Spares Combined", "SAC Verified", "WhatsApp Invoice Sent"],
    },
    capabilities: {
      headline: "Powered by Vinimay's dedicated Service model and multi-item transaction architecture.",
      items: [
        { number: "01", title: "Dedicated Service Catalog", description: "Save professional services with pre-configured SAC codes, standard rates, and descriptions in Inventory > Services." },
        { number: "02", title: "Products + Services on Single Bill", description: "Add both physical products (spares) and professional services (labor) into the same invoice seamlessly." },
        { number: "03", title: "Service Start & Due Dates", description: "Record service start dates and completion due dates directly on each service line item." },
        { number: "04", title: "Fixed & Hourly Rate Billing", description: "Support for fixed contract charges or variable rate billing (e.g. per hour, per visit, per session)." },
        { number: "05", title: "Customer Ledger Tracking", description: "Track client advances, outstanding receivables, and dispatch automated payment reminder statements." },
        { number: "06", title: "1-Click WhatsApp Invoices", description: "Deliver clean, professional PDF service invoices straight to customer WhatsApp with dynamic UPI QR." },
      ],
    },
    workflow: {
      titlePrefix: "How service billing works",
      handwrittenScript: "in 5 steps",
      titleSuffix: "",
      subtitle: "From selecting professional services to billing labor and parts on a single compliant invoice.",
      steps: [
        { id: "Step-1", badgeTime: "Step 1", badgeTag: "CATALOG", title: "Select Service from Inventory", category: "PRE-SAVED SAC CODE • FIXED / HOURLY RATE", previewVariant: "catalog" },
        { id: "Step-2", badgeTime: "Step 2", badgeTag: "DETAILS", title: "Set Service Start & Due Dates", category: "JOB DESCRIPTION • COMPLETION SCHEDULE", previewVariant: "inventory" },
        { id: "Step-3", badgeTime: "Step 3", badgeTag: "PARTS", title: "Add Physical Products / Spares", category: "COMBINE SPARE PARTS WITH LABOR CHARGES", previewVariant: "parties" },
        { id: "Step-4", badgeTime: "Step 4", badgeTag: "INVOICE", title: "Calculate GST & Issue Invoice", category: "18% SERVICE GST • DYNAMIC UPI QR EMBEDDED", previewVariant: "billing" },
        { id: "Step-5", badgeTime: "Step 5", badgeTag: "REPORTS", title: "Track Receivables & Service P&L", category: "PARTY KHATA UPDATED • WHATSAPP DELIVERY CONFIRMED", previewVariant: "reports" },
      ],
    },
  },
};

// Aliases for alternate URL slugs
INDUSTRY_PAGES["restaurants"] = INDUSTRY_PAGES["restaurant"];
INDUSTRY_PAGES["transport"] = INDUSTRY_PAGES["transportation"];
INDUSTRY_PAGES["gym"] = INDUSTRY_PAGES["gyms"];
INDUSTRY_PAGES["fitness"] = INDUSTRY_PAGES["gyms"];
INDUSTRY_PAGES["travel"] = INDUSTRY_PAGES["travels"];
