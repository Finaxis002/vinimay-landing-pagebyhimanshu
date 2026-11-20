export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "Is Vinimay truly 100% free with no hidden charges?",
    answer:
      "Yes. Vinimay provides unlimited GST invoicing, inventory formulas, recipe stock deduction, and customer management with zero subscription fees, zero trial limits, and zero credit card requirements.",
    defaultOpen: true,
  },
  {
    id: 2,
    question: "How do I dispatch tax invoices via WhatsApp without paying Meta API fees?",
    answer:
      "Vinimay utilizes an integrated Baileys WhatsApp web bridge. You simply scan the QR code using your official WhatsApp mobile application once. Your server connects directly and dispatches generated PDF tax invoices, receipts, and payment links with zero per-message charges.",
  },
  {
    id: 3,
    question: "How does recipe-level stock deduction work for restaurants?",
    answer:
      "You can define raw material recipes for any dish (e.g., 1 Burger = 1 bun, 1 patty, 20g cheese, 15ml sauce). Whenever an order is rung up at the POS or received via online delivery integration, Vinimay automatically subtracts the exact quantity of raw items from your central inventory in real time.",
  },
  {
    id: 4,
    question: "Can my Chartered Accountant access my books?",
    answer:
      "Yes. You can invite your accountant or chartered accountant with specific role-based permissions, allowing them to verify ledgers and generate GSTR reports without seeing restricted staff or salary data.",
  },
  {
    id: 5,
    question: "Does Vinimay work offline for retail stores?",
    answer:
      "The desktop version works completely offline for retail counter billing, receipt printing, and barcode scans. All entries sync automatically to your secure cloud database as soon as internet connectivity returns.",
  },
];
