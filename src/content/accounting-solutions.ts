export interface AccountingItem {
  id: number;
  title: string;
  description: string;
  badge: string;
  status: string;
  icon: string;
}

export const ACCOUNTING_ITEMS: AccountingItem[] = [
  {
    id: 0,
    title: "Books and ledgers",
    description: "Journal entries, contra entries, customer and vendor ledgers, bank reconciliation.",
    badge: "VINIMAY BOOKS",
    status: "Double-Entry Ready",
    icon: "book-open",
  },
  {
    id: 1,
    title: "AI ledger suggestions",
    description: "AI recommends the right ledger account for each entry, so your profit and loss and tax filing stay clean.",
    badge: "AI LEDGER ENGINE",
    status: "99.4% AI Match",
    icon: "sparkles",
  },
  {
    id: 2,
    title: "Live reports",
    description: "Profit and loss, balance sheet, party aging, receivable and payable schedules.",
    badge: "FINANCIAL REPORTS",
    status: "Live & Instant",
    icon: "pie-chart",
  },
  {
    id: 3,
    title: "Team, CA and agency",
    description: "Give staff limited roles. CAs and accounting agencies manage many clients with an audit trail.",
    badge: "CA & AGENCY AUDIT",
    status: "Audit Trail Active",
    icon: "users",
  },
];
