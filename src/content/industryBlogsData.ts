export interface IndustryResourceCard {
  id: string;
  tag: string;
  title: string;
  summary: string;
  readTime: string;
  linkText: string;
  href: string;
  badgeLogo?: string;
  gradient?: string;
  accentGlow?: string;
  visualTheme?: "purple-orb" | "emerald-grid" | "cyan-waves" | "rose-cube" | "amber-glow";
  imageUrl?: string;
  imageAlt?: string;
  date?: string;
  views?: string | number;
  comments?: number;
  author?: {
    name: string;
    avatarUrl?: string;
  };
}

export interface IndustryBlogsGroup {
  badge?: string;
  title: string;
  buttonText?: string;
  buttonHref?: string;
  description: string;
  cards: IndustryResourceCard[];
}

export const INDUSTRY_BLOGS: Record<string, IndustryBlogsGroup> = {
  "transportation": {
    "badge": "Logistics & Fleet Playbooks",
    "title": "Essential Guides for Transport Operators & Fleets",
    "buttonText": "View all transport blogs",
    "buttonHref": "https://vinimay.sharda.co.in/blogs?category=accounting+software",
    "description": "Statutory trip records, vehicle log guides, E-Way bills, and expense reconciliation directly from the Vinimay knowledge base.",
    "cards": [
      {
        "id": "transportation-trip-records-explaine",
        "tag": "TRANSPORT",
        "title": "What Are Transportation/Trip Records and Which Businesses Need Them?",
        "summary": "Moving goods regularly? Here's what transportation or trip records actually track, and which businesses genuinely need to...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/transportation-trip-records-explaine",
        "badgeLogo": "Trip Records",
        "gradient": "from-indigo-950 via-purple-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "purple-orb",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790751682/Featured%20Images/What_Are_Transportation_Trip_Records_h9x7t6.webp",
        "imageAlt": " Transportation"
      },
      {
        "id": "uae-transport-business-vehicle-and-trip-records-guide",
        "tag": "FLEET RECORDS",
        "title": "UAE Transport Business: Vehicle and Trip Records Guide",
        "summary": "Learn which vehicle and trip records UAE transport businesses should maintain, including fuel, mileage, driver details,...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/uae-transport-business-vehicle-and-trip-records-guide",
        "badgeLogo": "Vehicle Guide",
        "gradient": "from-slate-900 via-blue-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "cyan-waves",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1793443266/Featured%20Images/uae-transport-business-records-per-vehicle-trip-web_l32kcz.webp",
        "imageAlt": "uae-transport"
      },
      {
        "id": "can-billing-software-generate-e-way-bills",
        "tag": "COMPLIANCE",
        "title": "Can Billing Software Generate E-Way Bills?",
        "summary": "Billing software can generate E-Way Bills by using invoice and transport details, helping businesses streamline GST compliance...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/can-billing-software-generate-e-way-bills",
        "badgeLogo": "E-Way Bills",
        "gradient": "from-emerald-950 via-teal-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "emerald-grid",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1791196154/Featured%20Images/Can_Billing_Software_Generate_E-Way_Bills_lz87hz.webp",
        "imageAlt": "Can Billing Software Generate E-Way Bills?"
      },
      {
        "id": "what-is-a-delivery-challan-and-how-is-it-different-from-an-invoice",
        "tag": "DISPATCH",
        "title": "What Is a Delivery Challan and How Is It Different From an Invoice?",
        "summary": "Not sure whether to send a delivery challan or an invoice with your goods? Here's exactly when each is required under GST and...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/what-is-a-delivery-challan-and-how-is-it-different-from-an-invoice",
        "badgeLogo": "Challan vs Inv",
        "gradient": "from-rose-950 via-pink-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "rose-cube",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790749301/Featured%20Images/What_Is_a_Delivery_Challan_and_How_Is_It_Different_cndf0j.webp",
        "imageAlt": "Delivery Challan "
      },
      {
        "id": "track-business-expenses-accurately",
        "tag": "EXPENSE TRACKING",
        "title": "How to Track Business Expenses Accurately (Practical Guide)",
        "summary": "Losing track of business costs? Here's a reliable, practical way to track expenses accurately, so tax time and profitability...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/track-business-expenses-accurately",
        "badgeLogo": "Expense Logs",
        "gradient": "from-amber-950 via-orange-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "amber-glow",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790750344/Featured%20Images/How_to_Track_Business_Expenses_Accurately_vkzemo.webp",
        "imageAlt": "How to Track Business Expenses"
      }
    ]
  },
  "marbles": {
    "badge": "Marble, Granite & Tiles",
    "title": "Stock Control, Slab Invoicing & Delivery Challans",
    "buttonText": "View inventory blogs",
    "buttonHref": "https://vinimay.sharda.co.in/blogs?category=Inventory+Management",
    "description": "Guides on E-Way bill generation, stock movement tracking, delivery challans, and product-wise sales reports for stone dealers.",
    "cards": [
      {
        "id": "can-billing-software-generate-e-way-bills",
        "tag": "COMPLIANCE",
        "title": "Can Billing Software Generate E-Way Bills?",
        "summary": "Billing software can generate E-Way Bills by using invoice and transport details, helping businesses streamline GST compliance...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/can-billing-software-generate-e-way-bills",
        "badgeLogo": "E-Way Bills",
        "gradient": "from-emerald-950 via-teal-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "emerald-grid",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1791196154/Featured%20Images/Can_Billing_Software_Generate_E-Way_Bills_lz87hz.webp",
        "imageAlt": "Can Billing Software Generate E-Way Bills?"
      },
      {
        "id": "what-is-a-delivery-challan-and-how-is-it-different-from-an-invoice",
        "tag": "DISPATCH",
        "title": "What Is a Delivery Challan and How Is It Different From an Invoice?",
        "summary": "Not sure whether to send a delivery challan or an invoice with your goods? Here's exactly when each is required under GST and...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/what-is-a-delivery-challan-and-how-is-it-different-from-an-invoice",
        "badgeLogo": "Delivery Slip",
        "gradient": "from-indigo-950 via-purple-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "purple-orb",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790749301/Featured%20Images/What_Is_a_Delivery_Challan_and_How_Is_It_Different_cndf0j.webp",
        "imageAlt": "Delivery Challan "
      },
      {
        "id": "manage-product-wise-sales-reports",
        "tag": "SALES REPORTS",
        "title": "How Can I Manage Product Wise Sales Reports?",
        "summary": "Want to see sales broken down by individual product, not just an overall total? Here's how to generate and actually use...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/manage-product-wise-sales-reports",
        "badgeLogo": "Sales by Slab",
        "gradient": "from-amber-950 via-orange-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "amber-glow",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790836473/Featured%20Images/manage-product-wise-sales-reports-vinimay_pw6kva.webp",
        "imageAlt": "How Can I Manage Product Wise Sales Reports?"
      },
      {
        "id": "can-accounting-software-automatically-update-inventory-after-sales",
        "tag": "INVENTORY",
        "title": "Can Accounting Software Automatically Update Inventory After Sales?",
        "summary": "Learn how accounting software can automatically update inventory after sales by adjusting stock quantities, recording...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/can-accounting-software-automatically-update-inventory-after-sales",
        "badgeLogo": "Stock Synced",
        "gradient": "from-blue-950 via-slate-900 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "cyan-waves",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790338041/Featured%20Images/7528f1e8-39ed-4ec1-b243-16e97fad21a1_svzan1.webp",
        "imageAlt": "Does Accounting Software Update Inventory Automatically?"
      },
      {
        "id": "manage-vendor-supplier-records-efficiently",
        "tag": "VENDORS",
        "title": "How to Manage Vendor and Supplier Records Efficiently",
        "summary": "Struggling to keep supplier details and payments organized? Here's a reliable way to manage vendor records accurately as your...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/manage-vendor-supplier-records-efficiently",
        "badgeLogo": "Quarry Vendors",
        "gradient": "from-rose-950 via-pink-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "rose-cube",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790751536/Featured%20Images/How_to_Manage_Vendor_and_Supplier_Records_Efficiently_w10fxv.webp",
        "imageAlt": "How to Manage Vendor and Supplier Records Efficiently"
      }
    ]
  },
  "service": {
    "badge": "Services & Consulting",
    "title": "Service Billing, Receivables & Customer Invoicing",
    "buttonText": "View service blogs",
    "buttonHref": "https://vinimay.sharda.co.in/blogs?category=Accounting+%26+Finance",
    "description": "Practical guides on billing for service businesses, speeding up customer payments, and reducing staff billing errors.",
    "cards": [
      {
        "id": "what-to-look-for-in-billing-and-invoicing-software-for-the-service-industry",
        "tag": "SERVICE BIZ",
        "title": "What to Look for in Billing and Invoicing Software for the Service Industry",
        "summary": "Service industry billing works differently from retail. Here's what invoicing software actually needs to handle \u2014 formats,...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/what-to-look-for-in-billing-and-invoicing-software-for-the-service-industry",
        "badgeLogo": "Service Billing",
        "gradient": "from-cyan-950 via-blue-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "cyan-waves",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790758694/Featured%20Images/What_to_Look_for_in_Billing_and_Invoicing_lomapp.webp",
        "imageAlt": "What to Look for in Billing and Invoicing Software"
      },
      {
        "id": "choose-accounting-software-service-business",
        "tag": "FREE SOFTWARE",
        "title": "How to Choose Free Accounting Software for a Service Business",
        "summary": "Service businesses need different accounting features than retail. Here's a practical framework for choosing the right...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/choose-accounting-software-service-business",
        "badgeLogo": "Software Guide",
        "gradient": "from-purple-950 via-indigo-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "purple-orb",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790754051/Featured%20Images/How_to_Choose_Free_Accounting_Software_wrkgxv.webp",
        "imageAlt": "Accounting Software"
      },
      {
        "id": "control-staff-billing-errors",
        "tag": "QUALITY CONTROL",
        "title": "How Can I Control Errors Made by Staff During Billing?",
        "summary": "How Can I Control Errors Made by Staff During Billing Seeing recurring billing mistakes from staff? Here are specific,...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/control-staff-billing-errors",
        "badgeLogo": "Staff Controls",
        "gradient": "from-teal-950 via-emerald-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "emerald-grid",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790833915/Featured%20Images/control-staff-billing-errors-vinimay_dcficl.webp",
        "imageAlt": "Billing"
      },
      {
        "id": "track-outstanding-payments-receivables",
        "tag": "RECEIVABLES",
        "title": "How to Track Outstanding Payments (Receivables) Effectively",
        "summary": "Losing track of who owes you money? Here's a reliable, accurate way to track outstanding payments and receivables across all...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/track-outstanding-payments-receivables",
        "badgeLogo": "Receivables",
        "gradient": "from-amber-950 via-orange-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "amber-glow",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790749835/Featured%20Images/How_to_Track_Outstanding_Payments_gyz3hl.webp",
        "imageAlt": "Payment"
      },
      {
        "id": "what-details-are-mandatory-on-a-gst-invoices",
        "tag": "GST TAXATION",
        "title": "What Details Are Mandatory on a GST Invoice?",
        "summary": "Know the mandatory GST invoice details, including invoice number, date, GSTIN, supplier and buyer details, HSN/SAC code,...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/what-details-are-mandatory-on-a-gst-invoices",
        "badgeLogo": "GST Mandatory",
        "gradient": "from-rose-950 via-pink-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "rose-cube",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1791197692/Featured%20Images/What_Details_Are_Mandatory_on_a_GST_Invoice_glkkmo.webp",
        "imageAlt": "What Details Are Mandatory on a GST Invoice"
      }
    ]
  },
  "trading": {
    "badge": "Wholesale & Trading",
    "title": "B2B GST Invoicing, Proformas & Ledger Aging",
    "buttonText": "View trading blogs",
    "buttonHref": "https://vinimay.sharda.co.in/blogs?category=Business+Growth",
    "description": "Master B2B tax invoice formats, proforma estimates, vendor management, and accounts receivable collections.",
    "cards": [
      {
        "id": "b2b-vs-b2c-gst-invoice-format",
        "tag": "B2B INVOICE",
        "title": "B2B vs B2C GST Invoice Formats: What's the Difference?",
        "summary": "B2B and B2C GST invoices aren't formatted the same way. Here's exactly what changes between the two, and how to know which one...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/b2b-vs-b2c-gst-invoice-format",
        "badgeLogo": "B2B Format",
        "gradient": "from-purple-950 via-indigo-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "purple-orb",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790761974/Featured%20Images/vinimay-b2b-vs-b2c-gst-invoice_kk0guv.webp",
        "imageAlt": "B2B vs B2C GST Invoice Formats"
      },
      {
        "id": "what-is-a-proforma-invoice-and-when-should-you-use-one",
        "tag": "PROFORMA",
        "title": "What Is a Proforma Invoice and When Should You Use One?",
        "summary": "Confused between a proforma invoice and a tax invoice? Here's exactly what a proforma invoice is, when to use it, and what it...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/what-is-a-proforma-invoice-and-when-should-you-use-one",
        "badgeLogo": "Proforma Bill",
        "gradient": "from-emerald-950 via-teal-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "emerald-grid",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790748712/Featured%20Images/What_Is_a_Proforma_Invoice_si4doq.webp",
        "imageAlt": "What Is a Proforma Invoice "
      },
      {
        "id": "what-is-ledger-management",
        "tag": "LEDGER MGMT",
        "title": "What Is Ledger Management and Why Does It Matter for Small Businesses?",
        "summary": "Confused by \"ledger management\" as a software feature? Here's a clear, practical explanation of what it does and why it...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/what-is-ledger-management",
        "badgeLogo": "Ledger Khata",
        "gradient": "from-blue-950 via-slate-900 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "cyan-waves",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790751955/Featured%20Images/What_Is_Ledger_Management_o256b8.webp",
        "imageAlt": "Ledger Management "
      },
      {
        "id": "accounts-receivable-management-get-paid-faster",
        "tag": "CASH FLOW",
        "title": "Accounts Receivable Management: How to Get Paid Faster",
        "summary": "Getting paid faster isn't luck \u2014 it's a system. Here's how to manage accounts receivable to actually shorten your collection...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/accounts-receivable-management-get-paid-faster",
        "badgeLogo": "Get Paid Faster",
        "gradient": "from-amber-950 via-orange-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "amber-glow",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790758934/Featured%20Images/Accounts_Receivable_Management_ngohjv.webp",
        "imageAlt": "Receivable"
      },
      {
        "id": "manage-vendor-supplier-records-efficiently",
        "tag": "SUPPLIERS",
        "title": "How to Manage Vendor and Supplier Records Efficiently",
        "summary": "Struggling to keep supplier details and payments organized? Here's a reliable way to manage vendor records accurately as your...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/manage-vendor-supplier-records-efficiently",
        "badgeLogo": "Vendor Ledger",
        "gradient": "from-rose-950 via-pink-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "rose-cube",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790751536/Featured%20Images/How_to_Manage_Vendor_and_Supplier_Records_Efficiently_w10fxv.webp",
        "imageAlt": "How to Manage Vendor and Supplier Records Efficiently"
      }
    ]
  },
  "manufacturing": {
    "badge": "Manufacturing & Production",
    "title": "Inventory Control, Delivery Challans & Stock Sync",
    "buttonText": "View inventory blogs",
    "buttonHref": "https://vinimay.sharda.co.in/blogs?category=Inventory+Management",
    "description": "Essential articles on connecting billing with inventory, delivery challans, preventing stockouts, and tracking slow-moving items.",
    "cards": [
      {
        "id": "connect-billing-with-inventory-management",
        "tag": "INVENTORY",
        "title": "How Can I Connect Billing With Inventory Management?",
        "summary": "How Can I Connect Billing With Inventory Management Billing and stock tracking still separate tasks in your business? Here's...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/connect-billing-with-inventory-management",
        "badgeLogo": "Billing + Stock",
        "gradient": "from-teal-950 via-emerald-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "emerald-grid",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790835044/Featured%20Images/manage-inventory-without-separate-files-vinimay_yudkh5.webp",
        "imageAlt": " Inventory"
      },
      {
        "id": "can-accounting-software-automatically-update-inventory-after-sales",
        "tag": "STOCK SYNC",
        "title": "Can Accounting Software Automatically Update Inventory After Sales?",
        "summary": "Learn how accounting software can automatically update inventory after sales by adjusting stock quantities, recording...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/can-accounting-software-automatically-update-inventory-after-sales",
        "badgeLogo": "Auto-Deduct",
        "gradient": "from-indigo-950 via-purple-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "purple-orb",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790338041/Featured%20Images/7528f1e8-39ed-4ec1-b243-16e97fad21a1_svzan1.webp",
        "imageAlt": "Does Accounting Software Update Inventory Automatically?"
      },
      {
        "id": "can-software-identify-slow-moving-inventory",
        "tag": "COST CONTROL",
        "title": "Can Software Identify Slow-Moving Inventory?",
        "summary": "Learn how accounting and inventory software can identify slow-moving stock using sales trends, inventory reports, turnover...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/can-software-identify-slow-moving-inventory",
        "badgeLogo": "Dead Stock Alert",
        "gradient": "from-amber-950 via-orange-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "amber-glow",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790338041/Featured%20Images/7528f1e8-39ed-4ec1-b243-16e97fad21a1_svzan1.webp",
        "imageAlt": "Can Software Identify Slow-Moving Inventory?"
      },
      {
        "id": "what-is-a-delivery-challan-and-how-is-it-different-from-an-invoice",
        "tag": "DISPATCH",
        "title": "What Is a Delivery Challan and How Is It Different From an Invoice?",
        "summary": "Not sure whether to send a delivery challan or an invoice with your goods? Here's exactly when each is required under GST and...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/what-is-a-delivery-challan-and-how-is-it-different-from-an-invoice",
        "badgeLogo": "Factory Challan",
        "gradient": "from-rose-950 via-pink-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "rose-cube",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790749301/Featured%20Images/What_Is_a_Delivery_Challan_and_How_Is_It_Different_cndf0j.webp",
        "imageAlt": "Delivery Challan "
      },
      {
        "id": "manage-vendor-supplier-records-efficiently",
        "tag": "SUPPLIERS",
        "title": "How to Manage Vendor and Supplier Records Efficiently",
        "summary": "Struggling to keep supplier details and payments organized? Here's a reliable way to manage vendor records accurately as your...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/manage-vendor-supplier-records-efficiently",
        "badgeLogo": "Raw Material PO",
        "gradient": "from-blue-950 via-slate-900 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "cyan-waves",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790751536/Featured%20Images/How_to_Manage_Vendor_and_Supplier_Records_Efficiently_w10fxv.webp",
        "imageAlt": "How to Manage Vendor and Supplier Records Efficiently"
      }
    ]
  },
  "gyms": {
    "badge": "Gym & Fitness Studio",
    "title": "Member Khata, Receivables & Billing Accuracy",
    "buttonText": "View business blogs",
    "buttonHref": "https://vinimay.sharda.co.in/blogs?category=Small+Businesses",
    "description": "Helpful resources on managing customer outstanding balances, speeding up receivables, and keeping accurate member books.",
    "cards": [
      {
        "id": "can-free-accounting-software-track-customer-outstanding-payments",
        "tag": "RECEIVABLES",
        "title": "Can Free Accounting Software Track Customer Outstanding Payments?",
        "summary": "Track customer outstanding payments with free accounting software by monitoring invoices, received payments, and pending...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/can-free-accounting-software-track-customer-outstanding-payments",
        "badgeLogo": "Member Khata",
        "gradient": "from-indigo-950 via-purple-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "purple-orb",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1791202165/Featured%20Images/Can_Free_Accounting_Software_Track_Customer_Outstanding_Payments_v37dho.webp",
        "imageAlt": "Can Free Accounting Software Track Customer Outstanding Payments?"
      },
      {
        "id": "track-outstanding-payments-receivables",
        "tag": "CASH FLOW",
        "title": "How to Track Outstanding Payments (Receivables) Effectively",
        "summary": "Losing track of who owes you money? Here's a reliable, accurate way to track outstanding payments and receivables across all...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/track-outstanding-payments-receivables",
        "badgeLogo": "Payment Alert",
        "gradient": "from-amber-950 via-orange-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "amber-glow",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790749835/Featured%20Images/How_to_Track_Outstanding_Payments_gyz3hl.webp",
        "imageAlt": "Payment"
      },
      {
        "id": "check-daily-sales-transactions-one-place",
        "tag": "DAILY SALES",
        "title": "How Can I Check Daily Sales and Transactions from One Place?",
        "summary": "Tired of checking sales, payments, and stock separately? Here's how to get a single, consolidated view of your day's business...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/check-daily-sales-transactions-one-place",
        "badgeLogo": "Daily Register",
        "gradient": "from-teal-950 via-emerald-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "emerald-grid",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790769051/Featured%20Images/How_Can_I_Check_Daily_Sales_and_Transactions_vvvxqw.webp",
        "imageAlt": "Check Daily Sales and Transactions f"
      },
      {
        "id": "what-details-are-mandatory-on-a-gst-invoices",
        "tag": "GST INVOICE",
        "title": "What Details Are Mandatory on a GST Invoice?",
        "summary": "Know the mandatory GST invoice details, including invoice number, date, GSTIN, supplier and buyer details, HSN/SAC code,...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/what-details-are-mandatory-on-a-gst-invoices",
        "badgeLogo": "GST Receipt",
        "gradient": "from-rose-950 via-pink-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "rose-cube",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1791197692/Featured%20Images/What_Details_Are_Mandatory_on_a_GST_Invoice_glkkmo.webp",
        "imageAlt": "What Details Are Mandatory on a GST Invoice"
      },
      {
        "id": "control-staff-billing-errors",
        "tag": "STAFF ACCURACY",
        "title": "How Can I Control Errors Made by Staff During Billing?",
        "summary": "How Can I Control Errors Made by Staff During Billing Seeing recurring billing mistakes from staff? Here are specific,...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/control-staff-billing-errors",
        "badgeLogo": "Front Desk Ops",
        "gradient": "from-blue-950 via-slate-900 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "cyan-waves",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790833915/Featured%20Images/control-staff-billing-errors-vinimay_dcficl.webp",
        "imageAlt": "Billing"
      }
    ]
  },
  "kirana": {
    "badge": "Kirana & Grocery Retail",
    "title": "Counter POS, Stock Tracking & Daily Sales",
    "buttonText": "View retail blogs",
    "buttonHref": "https://vinimay.sharda.co.in/blogs?category=Small+Businesses",
    "description": "Articles on tracking retail stock, controlling staff counter mistakes, and managing customer credit (Udhar Khata).",
    "cards": [
      {
        "id": "can-free-billing-software-track-stock",
        "tag": "STOCK TRACKING",
        "title": "Can Free Billing Software Track Stock?",
        "summary": "Free billing software can track stock by recording purchases, sales,and product movements, helping businesses monitor...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/can-free-billing-software-track-stock",
        "badgeLogo": "Counter Stock",
        "gradient": "from-emerald-950 via-teal-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "emerald-grid",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1791200936/Featured%20Images/Can_Free_Billing_Software_Track_Stock_akzckz.webp",
        "imageAlt": "Can Free Billing Software Track Stock?"
      },
      {
        "id": "control-staff-billing-errors",
        "tag": "ACCURACY",
        "title": "How Can I Control Errors Made by Staff During Billing?",
        "summary": "How Can I Control Errors Made by Staff During Billing Seeing recurring billing mistakes from staff? Here are specific,...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/control-staff-billing-errors",
        "badgeLogo": "Counter Speed",
        "gradient": "from-cyan-950 via-blue-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "cyan-waves",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790833915/Featured%20Images/control-staff-billing-errors-vinimay_dcficl.webp",
        "imageAlt": "Billing"
      },
      {
        "id": "check-daily-sales-transactions-one-place",
        "tag": "DAILY REPORT",
        "title": "How Can I Check Daily Sales and Transactions from One Place?",
        "summary": "Tired of checking sales, payments, and stock separately? Here's how to get a single, consolidated view of your day's business...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/check-daily-sales-transactions-one-place",
        "badgeLogo": "Day Register",
        "gradient": "from-purple-950 via-indigo-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "purple-orb",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790769051/Featured%20Images/How_Can_I_Check_Daily_Sales_and_Transactions_vvvxqw.webp",
        "imageAlt": "Check Daily Sales and Transactions f"
      },
      {
        "id": "can-free-accounting-software-track-customer-outstanding-payments",
        "tag": "UDHAR LEDGER",
        "title": "Can Free Accounting Software Track Customer Outstanding Payments?",
        "summary": "Track customer outstanding payments with free accounting software by monitoring invoices, received payments, and pending...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/can-free-accounting-software-track-customer-outstanding-payments",
        "badgeLogo": "Udhar Khata",
        "gradient": "from-amber-950 via-orange-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "amber-glow",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1791202165/Featured%20Images/Can_Free_Accounting_Software_Track_Customer_Outstanding_Payments_v37dho.webp",
        "imageAlt": "Can Free Accounting Software Track Customer Outstanding Payments?"
      },
      {
        "id": "manage-product-wise-sales-reports",
        "tag": "MARGINS",
        "title": "How Can I Manage Product Wise Sales Reports?",
        "summary": "Want to see sales broken down by individual product, not just an overall total? Here's how to generate and actually use...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/manage-product-wise-sales-reports",
        "badgeLogo": "Item Margins",
        "gradient": "from-rose-950 via-pink-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "rose-cube",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790836473/Featured%20Images/manage-product-wise-sales-reports-vinimay_pw6kva.webp",
        "imageAlt": "How Can I Manage Product Wise Sales Reports?"
      }
    ]
  },
  "restaurant": {
    "badge": "Restaurant & Cafe POS",
    "title": "Multi-Staff Billing, Daily Sales & Inventory",
    "buttonText": "View invoicing blogs",
    "buttonHref": "https://vinimay.sharda.co.in/blogs?category=Invoicing+%26+Billings",
    "description": "Learn how to manage billing when multiple waiters and captains handle orders, track daily transactions, and prevent mistakes.",
    "cards": [
      {
        "id": "how-can-i-manage-accounting-when-multiple-employees-handle-billing",
        "tag": "MULTI-USER",
        "title": "How Can I Manage Accounting When Multiple Employees Handle Billing?",
        "summary": "More than one person billing customers? Here's how to structure the workflow so billing stays consistent and coordinated...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/how-can-i-manage-accounting-when-multiple-employees-handle-billing",
        "badgeLogo": "Multi-Counter",
        "gradient": "from-purple-950 via-indigo-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "purple-orb",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790833679/Featured%20Images/manage-multi-employee-billing-vinimay_mbtaj4.webp",
        "imageAlt": "Multiple Employees Handle Billing"
      },
      {
        "id": "control-staff-billing-errors",
        "tag": "ERROR CONTROL",
        "title": "How Can I Control Errors Made by Staff During Billing?",
        "summary": "How Can I Control Errors Made by Staff During Billing Seeing recurring billing mistakes from staff? Here are specific,...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/control-staff-billing-errors",
        "badgeLogo": "Order Accuracy",
        "gradient": "from-teal-950 via-emerald-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "emerald-grid",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790833915/Featured%20Images/control-staff-billing-errors-vinimay_dcficl.webp",
        "imageAlt": "Billing"
      },
      {
        "id": "check-daily-sales-transactions-one-place",
        "tag": "SHIFT SUMMARY",
        "title": "How Can I Check Daily Sales and Transactions from One Place?",
        "summary": "Tired of checking sales, payments, and stock separately? Here's how to get a single, consolidated view of your day's business...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/check-daily-sales-transactions-one-place",
        "badgeLogo": "Daily Summary",
        "gradient": "from-blue-950 via-slate-900 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "cyan-waves",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790769051/Featured%20Images/How_Can_I_Check_Daily_Sales_and_Transactions_vvvxqw.webp",
        "imageAlt": "Check Daily Sales and Transactions f"
      },
      {
        "id": "can-accounting-software-automatically-update-inventory-after-sales",
        "tag": "PANTRY SYNC",
        "title": "Can Accounting Software Automatically Update Inventory After Sales?",
        "summary": "Learn how accounting software can automatically update inventory after sales by adjusting stock quantities, recording...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/can-accounting-software-automatically-update-inventory-after-sales",
        "badgeLogo": "Pantry Stock",
        "gradient": "from-amber-950 via-orange-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "amber-glow",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790338041/Featured%20Images/7528f1e8-39ed-4ec1-b243-16e97fad21a1_svzan1.webp",
        "imageAlt": "Does Accounting Software Update Inventory Automatically?"
      },
      {
        "id": "what-details-are-mandatory-on-a-gst-invoices",
        "tag": "COMPLIANCE",
        "title": "What Details Are Mandatory on a GST Invoice?",
        "summary": "Know the mandatory GST invoice details, including invoice number, date, GSTIN, supplier and buyer details, HSN/SAC code,...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/what-details-are-mandatory-on-a-gst-invoices",
        "badgeLogo": "Restaurant GST",
        "gradient": "from-rose-950 via-pink-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "rose-cube",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1791197692/Featured%20Images/What_Details_Are_Mandatory_on_a_GST_Invoice_glkkmo.webp",
        "imageAlt": "What Details Are Mandatory on a GST Invoice"
      }
    ]
  },
  "courier": {
    "badge": "Courier & Parcel Delivery",
    "title": "Transport Records, Challans & Expense Tracking",
    "buttonText": "View billing blogs",
    "buttonHref": "https://vinimay.sharda.co.in/blogs?category=Invoicing+%26+Billings",
    "description": "Guides on transportation trip slips, delivery challans, E-Way bills, and accurate vehicle expense management.",
    "cards": [
      {
        "id": "transportation-trip-records-explaine",
        "tag": "LOGISTICS",
        "title": "What Are Transportation/Trip Records and Which Businesses Need Them?",
        "summary": "Moving goods regularly? Here's what transportation or trip records actually track, and which businesses genuinely need to...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/transportation-trip-records-explaine",
        "badgeLogo": "Parcel Transit",
        "gradient": "from-indigo-950 via-purple-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "purple-orb",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790751682/Featured%20Images/What_Are_Transportation_Trip_Records_h9x7t6.webp",
        "imageAlt": " Transportation"
      },
      {
        "id": "what-is-a-delivery-challan-and-how-is-it-different-from-an-invoice",
        "tag": "CHALLAN",
        "title": "What Is a Delivery Challan and How Is It Different From an Invoice?",
        "summary": "Not sure whether to send a delivery challan or an invoice with your goods? Here's exactly when each is required under GST and...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/what-is-a-delivery-challan-and-how-is-it-different-from-an-invoice",
        "badgeLogo": "Delivery Challan",
        "gradient": "from-slate-900 via-blue-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "cyan-waves",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790749301/Featured%20Images/What_Is_a_Delivery_Challan_and_How_Is_It_Different_cndf0j.webp",
        "imageAlt": "Delivery Challan "
      },
      {
        "id": "can-billing-software-generate-e-way-bills",
        "tag": "E-WAY BILL",
        "title": "Can Billing Software Generate E-Way Bills?",
        "summary": "Billing software can generate E-Way Bills by using invoice and transport details, helping businesses streamline GST compliance...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/can-billing-software-generate-e-way-bills",
        "badgeLogo": "E-Way Bills",
        "gradient": "from-emerald-950 via-teal-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "emerald-grid",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1791196154/Featured%20Images/Can_Billing_Software_Generate_E-Way_Bills_lz87hz.webp",
        "imageAlt": "Can Billing Software Generate E-Way Bills?"
      },
      {
        "id": "track-business-expenses-accurately",
        "tag": "EXPENSE LOGS",
        "title": "How to Track Business Expenses Accurately (Practical Guide)",
        "summary": "Losing track of business costs? Here's a reliable, practical way to track expenses accurately, so tax time and profitability...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/track-business-expenses-accurately",
        "badgeLogo": "Vehicle Costs",
        "gradient": "from-amber-950 via-orange-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "amber-glow",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790750344/Featured%20Images/How_to_Track_Business_Expenses_Accurately_vkzemo.webp",
        "imageAlt": "How to Track Business Expenses"
      },
      {
        "id": "what-details-are-mandatory-on-a-gst-invoices",
        "tag": "GST INVOICE",
        "title": "What Details Are Mandatory on a GST Invoice?",
        "summary": "Know the mandatory GST invoice details, including invoice number, date, GSTIN, supplier and buyer details, HSN/SAC code,...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/what-details-are-mandatory-on-a-gst-invoices",
        "badgeLogo": "SAC 996812",
        "gradient": "from-rose-950 via-pink-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "rose-cube",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1791197692/Featured%20Images/What_Details_Are_Mandatory_on_a_GST_Invoice_glkkmo.webp",
        "imageAlt": "What Details Are Mandatory on a GST Invoice"
      }
    ]
  },
  "travels": {
    "badge": "Travel & Cab Fleet",
    "title": "Trip Records, Proforma Invoices & Vehicle Logs",
    "buttonText": "View accounting blogs",
    "buttonHref": "https://vinimay.sharda.co.in/blogs?category=accounting+software",
    "description": "Essential guides for passenger fleet operators on vehicle logs, trip records, proforma estimates, and expenses.",
    "cards": [
      {
        "id": "uae-transport-business-vehicle-and-trip-records-guide",
        "tag": "VEHICLE LOGS",
        "title": "UAE Transport Business: Vehicle and Trip Records Guide",
        "summary": "Learn which vehicle and trip records UAE transport businesses should maintain, including fuel, mileage, driver details,...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/uae-transport-business-vehicle-and-trip-records-guide",
        "badgeLogo": "Trip Logging",
        "gradient": "from-slate-900 via-blue-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "cyan-waves",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1793443266/Featured%20Images/uae-transport-business-records-per-vehicle-trip-web_l32kcz.webp",
        "imageAlt": "uae-transport"
      },
      {
        "id": "transportation-trip-records-explaine",
        "tag": "TRIP RECORDS",
        "title": "What Are Transportation/Trip Records and Which Businesses Need Them?",
        "summary": "Moving goods regularly? Here's what transportation or trip records actually track, and which businesses genuinely need to...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/transportation-trip-records-explaine",
        "badgeLogo": "Route Records",
        "gradient": "from-indigo-950 via-purple-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "purple-orb",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790751682/Featured%20Images/What_Are_Transportation_Trip_Records_h9x7t6.webp",
        "imageAlt": " Transportation"
      },
      {
        "id": "what-is-a-proforma-invoice-and-when-should-you-use-one",
        "tag": "PROFORMA",
        "title": "What Is a Proforma Invoice and When Should You Use One?",
        "summary": "Confused between a proforma invoice and a tax invoice? Here's exactly what a proforma invoice is, when to use it, and what it...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/what-is-a-proforma-invoice-and-when-should-you-use-one",
        "badgeLogo": "Booking Voucher",
        "gradient": "from-emerald-950 via-teal-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "emerald-grid",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790748712/Featured%20Images/What_Is_a_Proforma_Invoice_si4doq.webp",
        "imageAlt": "What Is a Proforma Invoice "
      },
      {
        "id": "track-business-expenses-accurately",
        "tag": "EXPENSES",
        "title": "How to Track Business Expenses Accurately (Practical Guide)",
        "summary": "Losing track of business costs? Here's a reliable, practical way to track expenses accurately, so tax time and profitability...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/track-business-expenses-accurately",
        "badgeLogo": "Tolls & Fuel",
        "gradient": "from-amber-950 via-orange-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "amber-glow",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790750344/Featured%20Images/How_to_Track_Business_Expenses_Accurately_vkzemo.webp",
        "imageAlt": "How to Track Business Expenses"
      },
      {
        "id": "track-outstanding-payments-receivables",
        "tag": "RECEIVABLES",
        "title": "How to Track Outstanding Payments (Receivables) Effectively",
        "summary": "Losing track of who owes you money? Here's a reliable, accurate way to track outstanding payments and receivables across all...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/track-outstanding-payments-receivables",
        "badgeLogo": "Corporate Khata",
        "gradient": "from-rose-950 via-pink-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "rose-cube",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790749835/Featured%20Images/How_to_Track_Outstanding_Payments_gyz3hl.webp",
        "imageAlt": "Payment"
      }
    ]
  },
  "properties": {
    "badge": "Real Estate & Builders",
    "title": "Milestone Proformas, Branch Systems & Ledgers",
    "buttonText": "View tax law blogs",
    "buttonHref": "https://vinimay.sharda.co.in/blogs?category=Compliance+%26+Tax+Law",
    "description": "Guides on milestone proformas, multi-branch property project management, ledger accounting, and GST compliance.",
    "cards": [
      {
        "id": "what-is-a-proforma-invoice-and-when-should-you-use-one",
        "tag": "MILESTONE PROFORMA",
        "title": "What Is a Proforma Invoice and When Should You Use One?",
        "summary": "Confused between a proforma invoice and a tax invoice? Here's exactly what a proforma invoice is, when to use it, and what it...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/what-is-a-proforma-invoice-and-when-should-you-use-one",
        "badgeLogo": "Demand Note",
        "gradient": "from-emerald-950 via-teal-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "emerald-grid",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790748712/Featured%20Images/What_Is_a_Proforma_Invoice_si4doq.webp",
        "imageAlt": "What Is a Proforma Invoice "
      },
      {
        "id": "what-details-are-mandatory-on-a-gst-invoices",
        "tag": "GST RULES",
        "title": "What Details Are Mandatory on a GST Invoice?",
        "summary": "Know the mandatory GST invoice details, including invoice number, date, GSTIN, supplier and buyer details, HSN/SAC code,...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/what-details-are-mandatory-on-a-gst-invoices",
        "badgeLogo": "Property GST",
        "gradient": "from-indigo-950 via-purple-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "purple-orb",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1791197692/Featured%20Images/What_Details_Are_Mandatory_on_a_GST_Invoice_glkkmo.webp",
        "imageAlt": "What Details Are Mandatory on a GST Invoice"
      },
      {
        "id": "what-is-ledger-management",
        "tag": "LEDGER MGMT",
        "title": "What Is Ledger Management and Why Does It Matter for Small Businesses?",
        "summary": "Confused by \"ledger management\" as a software feature? Here's a clear, practical explanation of what it does and why it...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/what-is-ledger-management",
        "badgeLogo": "Buyer Khata",
        "gradient": "from-blue-950 via-slate-900 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "cyan-waves",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790751955/Featured%20Images/What_Is_Ledger_Management_o256b8.webp",
        "imageAlt": "Ledger Management "
      },
      {
        "id": "manage-multiple-businesses-in-one-system",
        "tag": "MULTI-ENTITY",
        "title": "How to Manage Multiple Businesses or Branches in One System",
        "summary": "Running more than one business or branch? Here's how to keep records accurate and separate, without switching between...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/manage-multiple-businesses-in-one-system",
        "badgeLogo": "Multi-Project",
        "gradient": "from-amber-950 via-orange-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "amber-glow",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790749562/Featured%20Images/How_to_Manage_Multiple_Businesses_yvobzg.webp",
        "imageAlt": "Multiple Businesses "
      },
      {
        "id": "accounts-receivable-management-get-paid-faster",
        "tag": "RECEIVABLES",
        "title": "Accounts Receivable Management: How to Get Paid Faster",
        "summary": "Getting paid faster isn't luck \u2014 it's a system. Here's how to manage accounts receivable to actually shorten your collection...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/accounts-receivable-management-get-paid-faster",
        "badgeLogo": "Installment Recovery",
        "gradient": "from-rose-950 via-pink-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "rose-cube",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790758934/Featured%20Images/Accounts_Receivable_Management_ngohjv.webp",
        "imageAlt": "Receivable"
      }
    ]
  },
  "general": {
    "badge": "Accounting & Free Software",
    "title": "Business Accounting, Excel Migration & Automation",
    "buttonText": "View all Vinimay blogs",
    "buttonHref": "https://vinimay.sharda.co.in/blogs?category=General",
    "description": "Essential guides from the Vinimay knowledge base on transitioning from spreadsheets to automated free software.",
    "cards": [
      {
        "id": "can-free-accounting-software-replace-excel-for-bookkeeping",
        "tag": "ACCOUNTING",
        "title": "Can Free Accounting Software Replace Excel for Bookkeeping?",
        "summary": "Discover whether free accounting software can replace Excel for bookkeeping and simplify financial records, invoicing, expense...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/can-free-accounting-software-replace-excel-for-bookkeeping",
        "badgeLogo": "Excel vs Software",
        "gradient": "from-purple-950 via-indigo-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "purple-orb",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1791286484/Featured%20Images/Can_Free_Accounting_Software_Replace_Excel_for_Bookkeeping_esboie.webp",
        "imageAlt": "Can Free Accounting Software Replace Excel for Bookkeeping?"
      },
      {
        "id": "how-does-accounting-software-prevent-duplicate-entries",
        "tag": "AUTOMATION",
        "title": "How Does Accounting Software Prevent Duplicate Entries?",
        "summary": "Learn how accounting software prevents duplicate entries using automated checks, unique transaction records, and validation to...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/how-does-accounting-software-prevent-duplicate-entries",
        "badgeLogo": "No Duplicates",
        "gradient": "from-teal-950 via-emerald-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "emerald-grid",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1791286567/Featured%20Images/How_Does_Accounting_Software_Prevent_Duplicate_Entries_g16upl.webp",
        "imageAlt": "How Does Accounting Software Prevent Duplicate Entries?"
      },
      {
        "id": "connect-billing-with-inventory-management",
        "tag": "INVENTORY SYNC",
        "title": "How Can I Connect Billing With Inventory Management?",
        "summary": "How Can I Connect Billing With Inventory Management Billing and stock tracking still separate tasks in your business? Here's...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/connect-billing-with-inventory-management",
        "badgeLogo": "Billing + Stock",
        "gradient": "from-cyan-950 via-blue-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "cyan-waves",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790835044/Featured%20Images/manage-inventory-without-separate-files-vinimay_yudkh5.webp",
        "imageAlt": " Inventory"
      },
      {
        "id": "what-details-are-mandatory-on-a-gst-invoices",
        "tag": "GST INVOICE",
        "title": "What Details Are Mandatory on a GST Invoice?",
        "summary": "Know the mandatory GST invoice details, including invoice number, date, GSTIN, supplier and buyer details, HSN/SAC code,...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/what-details-are-mandatory-on-a-gst-invoices",
        "badgeLogo": "GST Essentials",
        "gradient": "from-amber-950 via-orange-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "amber-glow",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1791197692/Featured%20Images/What_Details_Are_Mandatory_on_a_GST_Invoice_glkkmo.webp",
        "imageAlt": "What Details Are Mandatory on a GST Invoice"
      },
      {
        "id": "what-is-ledger-management",
        "tag": "LEDGER KHATA",
        "title": "What Is Ledger Management and Why Does It Matter for Small Businesses?",
        "summary": "Confused by \"ledger management\" as a software feature? Here's a clear, practical explanation of what it does and why it...",
        "readTime": "5 min read",
        "linkText": "Read article",
        "href": "https://vinimay.sharda.co.in/blogs/what-is-ledger-management",
        "badgeLogo": "Ledgers Explained",
        "gradient": "from-rose-950 via-pink-950 to-slate-950",
        "accentGlow": "#8077EC",
        "visualTheme": "rose-cube",
        "imageUrl": "https://res.cloudinary.com/ulqitb7e/image/upload/v1790751955/Featured%20Images/What_Is_Ledger_Management_o256b8.webp",
        "imageAlt": "Ledger Management "
      }
    ]
  }
};

// Aliases for industry routes
INDUSTRY_BLOGS["restaurants"] = INDUSTRY_BLOGS["restaurant"];
INDUSTRY_BLOGS["transport"] = INDUSTRY_BLOGS["transportation"];
INDUSTRY_BLOGS["gym"] = INDUSTRY_BLOGS["gyms"];
INDUSTRY_BLOGS["fitness"] = INDUSTRY_BLOGS["gyms"];
INDUSTRY_BLOGS["travel"] = INDUSTRY_BLOGS["travels"];
INDUSTRY_BLOGS["all"] = INDUSTRY_BLOGS["general"];

export function getIndustryBlogs(industryId: string): IndustryBlogsGroup {
  const rawId = (industryId || "").toLowerCase().trim();
  if (INDUSTRY_BLOGS[rawId]) {
    return INDUSTRY_BLOGS[rawId];
  }
  const singular = rawId.endsWith("ies")
    ? rawId.replace(/ies$/, "y")
    : rawId.replace(/s$/, "");
  if (INDUSTRY_BLOGS[singular]) {
    return INDUSTRY_BLOGS[singular];
  }
  return INDUSTRY_BLOGS["general"];
}
