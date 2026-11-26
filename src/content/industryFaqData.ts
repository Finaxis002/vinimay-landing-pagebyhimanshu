export interface IndustryFaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface IndustryFaqGroup {
  badge?: string;
  headline?: string;
  subtitle?: string;
  items: IndustryFaqItem[];
}

export const INDUSTRY_FAQS: Record<string, IndustryFaqGroup> = {
  courier: {
    badge: "Courier & Logistics FAQ",
    headline: "Frequently Asked Questions",
    subtitle: "Everything you need to know about volumetric weight calculation, parcel tracking, SAC 996812, and courier billing.",
    items: [
      {
        id: 1,
        question: "How is volumetric weight calculated for courier packages in Vinimay?",
        answer:
          "Vinimay applies standard carrier volumetric formulas (Length × Width × Height in cm / 5000, or in inches / 1728). Simply enter box dimensions, and the system automatically compares actual gross weight with volumetric weight, billing whichever is higher.",
      },
      {
        id: 2,
        question: "Can I print parcel shipping labels with barcodes and addresses?",
        answer:
          "Yes. You can instantly print thermal shipping labels and delivery challans containing the Air Waybill (AWB) number, sender (consignor) details, receiver (consignee) contact, destination pincode, and package weight on standard 4×6 inch sticker printers.",
      },
      {
        id: 3,
        question: "What GST SAC code and tax rates apply to courier delivery services?",
        answer:
          "Courier and parcel booking services fall under SAC 996812 with an 18% GST rate. For intra-state deliveries, Vinimay splits the tax into 9% CGST + 9% SGST; for inter-state parcels, 18% IGST is applied automatically based on the delivery state code.",
      },
      {
        id: 4,
        question: "Can I add fuel surcharges, COD handling fees, and insurance charges?",
        answer:
          "Yes. You can configure standardized additional charges such as COD collection fees, docket/booking fees, remote area delivery surcharges, and fuel percentage surcharges to be added directly to the courier invoice.",
      },
      {
        id: 5,
        question: "Can customers track their parcel bookings and receipts on WhatsApp?",
        answer:
          "Yes. As soon as a booking is recorded, you can send an automated WhatsApp message to both sender and recipient containing the consignment number, booking details, and a link to download their digital tax invoice.",
      },
    ],
  },

  marbles: {
    badge: "Marble & Granite FAQ",
    headline: "Frequently Asked Questions",
    subtitle: "Clear answers on multi-row slab dimension entries, square footage math, truck details, and stone inventory.",
    items: [
      {
        id: 1,
        question: "How does the multi-row slab dimension calculator work?",
        answer:
          "The marble entry grid allows you to record multiple slab lines with individual Length, Width (in inches or feet), and Piece Count. Vinimay instantly calculates the exact square footage (or square meters) and multiplies it by your rate per sq. ft., completely eliminating manual calculator errors.",
      },
      {
        id: 2,
        question: "Can I record truck number, transporter name, and E-Way bill on the bill?",
        answer:
          "Yes. The marble billing screen includes dedicated transport metadata fields: Truck Number, Transporter Name, LR/Bilty Number, and E-Way Bill Number, which print prominently on the delivery challan and tax invoice for smooth highway transit.",
      },
      {
        id: 3,
        question: "Can I manage different lots, block numbers, and stone finishes?",
        answer:
          "Yes. Track your stone inventory by lot/block number, thickness (16mm, 18mm, 20mm), finish (mirror polished, honed, leather, flamed), and godown location with complete stock visibility across multiple yards.",
      },
      {
        id: 4,
        question: "How do I handle stone wastage, transport breakage, or edge trimming discounts?",
        answer:
          "You can add line-item deductions for breakage or adjust chargeable square footage with a discount allowance before generating the final customer invoice and gate pass.",
      },
      {
        id: 5,
        question: "Does Vinimay support both Square Feet and Square Meter units?",
        answer:
          "Yes. You can set your default stone measurement unit at the company level to Square Feet (sq. ft) or Square Meters (sq. mtr), or toggle between them when preparing export orders.",
      },
    ],
  },

  travels: {
    badge: "Travel & Fleet FAQ",
    headline: "Frequently Asked Questions",
    subtitle: "Everything you need to know about route billing, fixed + per-km pricing, SAC 9985, and driver batta logging.",
    items: [
      {
        id: 1,
        question: "How does fixed package + extra per-km billing work in Vinimay?",
        answer:
          "You can configure travel packages (e.g., 8 Hours / 80 Km at ₹2,500). Enter the starting and ending odometer readings; Vinimay automatically calculates extra kilometers beyond the package and multiplies them by your agreed per-km rate.",
      },
      {
        id: 2,
        question: "Can I add highway tolls, state border taxes, parking, and driver night batta?",
        answer:
          "Yes. Dedicated input fields let you log toll plaza receipts, state entry permits, airport parking tickets, and overnight driver allowances, cleanly itemized on the passenger bill.",
      },
      {
        id: 3,
        question: "Which SAC code applies to passenger car rentals and tour packages?",
        answer:
          "Travel agency and passenger vehicle rental services are pre-configured with SAC 9985. Vinimay supports statutory 5% GST (without ITC) or 12% GST (with ITC) depending on your business model.",
      },
      {
        id: 4,
        question: "Can I generate corporate travel booking vouchers and monthly party statements?",
        answer:
          "Yes. Maintain corporate party accounts with custom credit terms, attach individual booking trip slips, and issue consolidated monthly GST invoices with detailed passenger itineraries.",
      },
      {
        id: 5,
        question: "Can drivers receive trip dispatch details on WhatsApp?",
        answer:
          "Yes. Once a booking is assigned, you can send the passenger name, pickup address, departure time, route, and vehicle number directly to the driver's phone via WhatsApp with one click.",
      },
    ],
  },

  transportation: {
    badge: "Transportation & Freight FAQ",
    headline: "Frequently Asked Questions",
    subtitle: "Common queries regarding GTA RCM 5%, trip sheet expense logs, diesel slips, and consignment notes.",
    items: [
      {
        id: 1,
        question: "How does Vinimay handle Reverse Charge Mechanism (RCM 5%) for Goods Transport (GTA)?",
        answer:
          "Vinimay includes a built-in 1-click RCM toggle for SAC 996511. When active, GST liability shifts to the registered consignor or consignee, and the freight bill prints the statutory RCM endorsement declaration required by tax authorities.",
      },
      {
        id: 2,
        question: "Can I log diesel fuel slips, FASTag tolls, and driver cash advances on trip sheets?",
        answer:
          "Yes. Every haulage trip sheet has dedicated expense logging for fuel pump slips, FASTag toll charges, driver en-route cash advances, and loading/unloading expenses, instantly showing net freight profit.",
      },
      {
        id: 3,
        question: "Can I generate Lorry Receipts (LR / Bilty) and Trip Sheets?",
        answer:
          "Yes. Generate formal Consignment Notes (LR / Bilty) with consignor/consignee details, vehicle registration, driver license, declared cargo value, and delivery conditions directly from the trip management desk.",
      },
      {
        id: 4,
        question: "Can I manage both owned fleet vehicles and market hired trucks?",
        answer:
          "Yes. Register your owned fleet trucks in settings or tag third-party market hired trucks per trip, tracking freight receivable from clients and freight payable to vehicle owners seamlessly.",
      },
      {
        id: 5,
        question: "How are detention and loading/unloading charges billed?",
        answer:
          "You can add detention charges (per-day vehicle waiting penalties) and laborer loading/unloading fees directly onto the trip invoice with automated tax calculations.",
      },
    ],
  },

  manufacturing: {
    badge: "Manufacturing & Production FAQ",
    headline: "Frequently Asked Questions",
    subtitle: "Answers about Bill of Materials (BOM) recipes, raw stock auto-deduction, batch tracking, and factory costing.",
    items: [
      {
        id: 1,
        question: "How does the Bill of Materials (BOM) recipe builder work in Vinimay?",
        answer:
          "In Vinimay, you can define a BOM recipe for any finished product detailing all raw materials, components, and packaging materials needed per unit or batch. The system saves the recipe for automated one-click production.",
      },
      {
        id: 2,
        question: "Does recording factory production automatically update raw material and finished stock?",
        answer:
          "Yes. When you click 'Record Production' and enter the manufactured quantity, Vinimay automatically deducts the required raw materials from inventory and inward-adds the new finished goods batch.",
      },
      {
        id: 3,
        question: "Can I track production scrap, wastage, and byproduct yield?",
        answer:
          "Yes. Production batch entries allow you to log normal process scrap, abnormal wastage, or saleable byproducts, maintaining true batch yield and material consumption reconciliation.",
      },
      {
        id: 4,
        question: "Can I calculate true per-unit production cost including labor and overheads?",
        answer:
          "Yes. Vinimay combines the weighted average purchase cost of raw materials with added labor, machining hours, and overhead expenses to determine the accurate landed cost of finished goods.",
      },
      {
        id: 5,
        question: "Does it support batch numbering and expiration date tracking?",
        answer:
          "Yes. Manufactured items can be assigned batch/lot numbers and manufacturing/expiry dates for statutory compliance, warranty tracking, and FIFO inventory dispatch.",
      },
    ],
  },

  properties: {
    badge: "Real Estate & Builders FAQ",
    headline: "Frequently Asked Questions",
    subtitle: "Everything you need to know about milestone demand letters, statutory RERA GST rates, and flat inventory.",
    items: [
      {
        id: 1,
        question: "How does construction milestone-based installment billing work?",
        answer:
          "Set up customized payment schedules for each flat or plot (e.g. Booking 10%, Plinth 15%, 5th Slab 10%, Possession 5%). When a site engineer verifies a milestone, generate demand letters and tax invoices in 1 click.",
      },
      {
        id: 2,
        question: "What GST rates apply to under-construction residential flats?",
        answer:
          "Vinimay is pre-configured with statutory residential GST: 1% for affordable housing and 5% for standard residential units (without ITC), automatically calculating the mandatory one-third land deduction.",
      },
      {
        id: 3,
        question: "Does Vinimay generate RERA-compliant receipts and buyer statements?",
        answer:
          "Yes. Maintain complete buyer accounts showing flat agreement value, booking advances, milestone demands, payments received, delayed payment interest (if applicable), and outstanding balances.",
      },
      {
        id: 4,
        question: "Can I track apartment units across multiple wings, towers, and floors?",
        answer:
          "Yes. Organize your real estate inventory by Project Name, Tower/Wing, Floor Number, and Flat/Commercial Unit with live status indicators (Available, Booked, Registered, Handed Over).",
      },
      {
        id: 5,
        question: "Can payment receipts and demand letters be sent on WhatsApp?",
        answer:
          "Yes. All milestone demand letters, payment acknowledgment receipts, and account statements can be shared directly as professional PDFs to buyers via WhatsApp.",
      },
    ],
  },

  restaurant: {
    badge: "Restaurant & Cafe POS FAQ",
    headline: "Frequently Asked Questions",
    subtitle: "Common questions about table seating, KOT ticket printing, 5% standalone restaurant GST, and thermal billing.",
    items: [
      {
        id: 1,
        question: "How does Table Management and Kitchen Order Ticket (KOT) work?",
        answer:
          "Counter staff or captains can select a table number, punch food orders, and print KOT slips directly to the kitchen printer. Items can be added incrementally until the customer requests the final bill.",
      },
      {
        id: 2,
        question: "What GST rate applies to standalone restaurants and cloud kitchens?",
        answer:
          "Standalone restaurants, cafes, and cloud kitchens are configured with statutory 5% GST (2.5% CGST + 2.5% SGST) without Input Tax Credit (ITC), ready for instant compliance.",
      },
      {
        id: 3,
        question: "Can I print bills on 2-inch and 3-inch thermal POS receipt printers?",
        answer:
          "Yes. Vinimay supports all standard ESC/POS USB, Bluetooth, and Wi-Fi thermal receipt printers with customizable receipt headers, your FSSAI license number, and table details.",
      },
      {
        id: 4,
        question: "Can I track kitchen ingredients and pantry stock consumption?",
        answer:
          "Yes. Link menu items to recipe ingredients so that selling dishes automatically reduces pantry stock (flour, cooking oil, spices, dairy) from your raw materials inventory.",
      },
      {
        id: 5,
        question: "Can tables be merged, split, or transferred?",
        answer:
          "Yes. If a large party combines two tables or customers move from the outdoor patio to the indoor lounge, table transfers and bill merging can be done with one tap.",
      },
    ],
  },

  service: {
    badge: "Services & Repair Center FAQ",
    headline: "Frequently Asked Questions",
    subtitle: "Answers regarding digital job cards, labor + spare parts combined bills, SAC 9987, and WhatsApp alerts.",
    items: [
      {
        id: 1,
        question: "How do digital Job Cards work in Vinimay?",
        answer:
          "When a customer drops off a smartphone, laptop, appliance, or vehicle, create a Job Card capturing customer contact, device serial/IMEI, reported fault, accessories received, and estimated delivery date.",
      },
      {
        id: 2,
        question: "How does split billing for Spare Parts (Goods) and Labor (Services) work?",
        answer:
          "Vinimay cleanly splits the invoice into Spare Parts (with hardware HSN codes like 8471/8517 at 18%) and Service Labor charges (SAC 9987 at 18%), calculating accurate taxes on a single combined bill.",
      },
      {
        id: 3,
        question: "Can I assign jobs to technicians and monitor repair progress?",
        answer:
          "Yes. Assign each job card to a specific repair technician and update job statuses from 'Under Inspection' and 'Waiting for Parts' to 'Repaired' and 'Delivered'.",
      },
      {
        id: 4,
        question: "Can I print service warranty terms and repair estimate receipts?",
        answer:
          "Yes. Print estimate slips for customer approval and generate final tax invoices with custom warranty disclaimers (e.g. 90-day screen replacement warranty) printed on the bottom.",
      },
      {
        id: 5,
        question: "Can I send automatic WhatsApp notifications when the item is ready?",
        answer:
          "Yes. With 1 click, send an automated WhatsApp alert notifying the customer that their device has been repaired and is ready for pickup, along with the invoice balance.",
      },
    ],
  },

  gyms: {
    badge: "Gym & Fitness FAQ",
    headline: "Frequently Asked Questions",
    subtitle: "Everything you need to know about short member code check-ins, plan expiry alerts, trainer payouts, and billing.",
    items: [
      {
        id: 1,
        question: "How does the short member code attendance check-in work?",
        answer:
          "Members are assigned a simple 4-digit code (e.g., #108). At the front desk, typing this code into the Vinimay terminal logs check-in in under a second, displays their membership status, and alerts staff if their plan is due for renewal.",
      },
      {
        id: 2,
        question: "Can I send automatic WhatsApp payment receipts and renewal reminders?",
        answer:
          "Yes. When a member enrolls or renews, an official PDF receipt is delivered directly to their WhatsApp number. Automated reminder alerts can be sent 3 days before their plan expires.",
      },
      {
        id: 3,
        question: "Can I track personal trainer (PT) commissions and client sessions?",
        answer:
          "Yes. Assign a personal trainer to member packages. Vinimay tracks completed PT sessions and automatically calculates trainer payout commissions based on attended workouts.",
      },
      {
        id: 4,
        question: "Can I manage multiple fitness plan packages (e.g., Cardio, CrossFit, Yoga)?",
        answer:
          "Yes. Configure membership plans with flexible durations (1 Month, 3 Months, 6 Months, Annual), admission fees, and optional 18% GST (SAC 999723).",
      },
      {
        id: 5,
        question: "Does the check-in terminal work without internet connectivity?",
        answer:
          "Yes. The front-desk attendance counter works completely offline. Member check-ins are logged locally and sync securely whenever the device reconnects.",
      },
    ],
  },

  kirana: {
    badge: "Kirana & Grocery FAQ",
    headline: "Frequently Asked Questions",
    subtitle: "Answers about high-speed barcode scanning, loose grain weighing, thermal receipts, and Udhar credit khata.",
    items: [
      {
        id: 1,
        question: "Can I use standard USB and wireless barcode scanners?",
        answer:
          "Yes. Plug in any standard barcode scanner; Vinimay instantly scans EAN/UPC product barcodes and adds items to the cart in milliseconds.",
      },
      {
        id: 2,
        question: "How do I weigh and bill loose items like rice, dal, and dry fruits?",
        answer:
          "Vinimay supports weighing scale inputs and decimal quantities (e.g., 0.650 kg). You can sell packaged goods and loose items seamlessly on the same bill.",
      },
      {
        id: 3,
        question: "How fast is customer checkout during peak rush hours?",
        answer:
          "The Kirana POS terminal is built for rapid transactions. With hotkeys for cash tendering, instant UPI QR code generation, and fast thermal receipt printing, checkout takes under 5 seconds.",
      },
      {
        id: 4,
        question: "Can I manage local customer 'Udhar' (Credit Khata) ledgers?",
        answer:
          "Yes. Record credit sales to regular neighborhood customers with one click. Track outstanding balances, set credit limits, and send polite WhatsApp payment reminders with your UPI link.",
      },
      {
        id: 5,
        question: "Can I print bills on standard 2-inch and 3-inch thermal printers?",
        answer:
          "Yes. Vinimay generates clean, compact 2-inch and 3-inch thermal receipts with your shop name, address, GSTIN, itemized list, and savings summary.",
      },
    ],
  },

  trading: {
    badge: "Trading & Wholesale FAQ",
    headline: "Frequently Asked Questions",
    subtitle: "Everything you need to know about B2B party ledgers, aging analysis, FIFO stock release, and GSTR-1 summaries.",
    items: [
      {
        id: 1,
        question: "Does Vinimay track batch numbers, lot pricing, and expiry dates?",
        answer:
          "Yes. Record batch numbers, manufacturing/expiry dates, and purchase rates on inward bills. Billing supports automatic FIFO (First-In-First-Out) stock release to prevent expired stock.",
      },
      {
        id: 2,
        question: "Can I set party-specific wholesale price lists and bulk slab discounts?",
        answer:
          "Yes. Configure special pricing rules, wholesale dealer rates, and volume-based quantity discounts for specific retail partners and distribution channels.",
      },
      {
        id: 3,
        question: "How does GST Input Tax Credit (ITC) reconciliation work?",
        answer:
          "Match inward supplier purchase invoices against your books to ensure you claim 100% of eligible Input Tax Credit without discrepancies in your GSTR-2B filing.",
      },
      {
        id: 4,
        question: "Can I manage multiple godowns, warehouses, and branch stock transfers?",
        answer:
          "Yes. Track real-time inventory across multiple storage locations and issue internal stock transfer challans with complete audit tracking.",
      },
      {
        id: 5,
        question: "Can I generate party outstanding reports and interest on overdue bills?",
        answer:
          "Yes. Monitor aging party ledgers (0-30 days, 31-60 days, 60+ days) and calculate interest on delayed payments as per your wholesale payment terms.",
      },
    ],
  },

  general: {
    badge: "General Business FAQ",
    headline: "Frequently Asked Questions",
    subtitle: "Common queries regarding 100% free billing, offline capability, WhatsApp PDF invoices, and data import.",
    items: [
      {
        id: 1,
        question: "Is Vinimay truly 100% free with no hidden renewal fees?",
        answer:
          "Yes. Vinimay is 100% Free Forever for Indian small businesses. There are no monthly subscriptions, hidden renewal fees, or bill count limitations.",
      },
      {
        id: 2,
        question: "Can I create both GST and Non-GST bills?",
        answer:
          "Yes. If you are unregistered or under the composition scheme, you can generate clean Non-GST bills and estimates. If GST registered, full CGST, SGST, IGST, and HSN compliance is enabled.",
      },
      {
        id: 3,
        question: "Can I use Vinimay offline without an active internet connection?",
        answer:
          "Yes. Vinimay is built to work completely offline. You can create invoices, manage stock, and log transactions without internet; your data syncs securely once you are back online.",
      },
      {
        id: 4,
        question: "Can I send branded PDF bills directly to customer WhatsApp?",
        answer:
          "Yes. With one tap, share a professional PDF invoice featuring your business logo, bank account details, and payment UPI QR code directly on WhatsApp.",
      },
      {
        id: 5,
        question: "Can I import my existing product catalog and customer list from Excel?",
        answer:
          "Yes. Vinimay provides simple Excel and CSV import templates so you can bring over your existing customer ledgers, contact numbers, and product stock in minutes.",
      },
    ],
  },

  all: {
    badge: "Industry Solutions FAQ",
    headline: "Frequently Asked Questions",
    subtitle: "Common questions about switching industries, multiple company setups, offline reliability, and custom workflows.",
    items: [
      {
        id: 1,
        question: "Can I run multiple businesses or different industry types in one Vinimay account?",
        answer:
          "Yes. You can manage multiple companies or business entities under one Vinimay account (e.g. one for your Transport fleet and another for your Marble yard) with completely segregated books, party ledgers, and tax GSTINs.",
      },
      {
        id: 2,
        question: "Are all industry-specific features really 100% free with no locked tiers?",
        answer:
          "Yes. All 12 industry modules—including Trip sheets, Marble slab square-foot formulas, Restaurant KOT printing, Gym member check-ins, and Manufacturing BOM recipes—are completely free forever.",
      },
      {
        id: 3,
        question: "What if my business trade is not explicitly listed among the 12 verticals?",
        answer:
          "You can use our versatile General Retail & Service setup. It offers full customization of HSN/SAC codes, multi-tax rates, decimal measurement units, custom fields, and barcode printing for any trade.",
      },
      {
        id: 4,
        question: "Can I switch or adjust my company's industry type later?",
        answer:
          "Yes. You can update your industry profile under Settings at any time. Existing invoices, ledgers, and inventory history remain fully preserved and intact.",
      },
      {
        id: 5,
        question: "Do all industry features and billing modules work offline?",
        answer:
          "Yes. Counter POS billing, weighing scale integrations, member check-ins, trip sheet entries, and thermal receipt printing all operate completely offline with automatic sync once reconnected.",
      },
    ],
  },
};

// Aliases
INDUSTRY_FAQS["restaurants"] = INDUSTRY_FAQS["restaurant"];
INDUSTRY_FAQS["transport"] = INDUSTRY_FAQS["transportation"];
INDUSTRY_FAQS["gym"] = INDUSTRY_FAQS["gyms"];
INDUSTRY_FAQS["fitness"] = INDUSTRY_FAQS["gyms"];
INDUSTRY_FAQS["travel"] = INDUSTRY_FAQS["travels"];

export function getIndustryFaq(industryId: string): IndustryFaqGroup {
  const rawId = (industryId || "").toLowerCase().trim();
  if (INDUSTRY_FAQS[rawId]) {
    return INDUSTRY_FAQS[rawId];
  }
  const singular = rawId.endsWith("ies")
    ? rawId.replace(/ies$/, "y")
    : rawId.replace(/s$/, "");
  if (INDUSTRY_FAQS[singular]) {
    return INDUSTRY_FAQS[singular];
  }
  return INDUSTRY_FAQS["general"];
}
