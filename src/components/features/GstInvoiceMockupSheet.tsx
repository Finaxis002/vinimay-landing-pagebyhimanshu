"use client";

import React from "react";
import { ShieldCheck, Check } from "lucide-react";

export interface GstInvoiceMockupSheetProps {
  className?: string;
  invoiceNo?: string;
  date?: string;
  dueDate?: string;
  buyerName?: string;
  buyerGstin?: string;
  buyerAddress?: string;
  buyerPhone?: string;
  consigneeName?: string;
  consigneeAddress?: string;
  items?: Array<{
    sr: number;
    name: string;
    hsn: string;
    qty: string;
    rate: string;
    taxable: string;
    gst: string;
    total: string;
  }>;
  taxableTotal?: string;
  cgst?: string;
  sgst?: string;
  grandTotal?: string;
  totalWords?: string;
  showPaidStamp?: boolean;
}

export default function GstInvoiceMockupSheet({
  className = "",
  invoiceNo = "INV-2041",
  date = "19/11/2026",
  dueDate = "03/12/2026",
  buyerName = "Sharma Traders",
  buyerGstin = "23ABCDE1234F1Z5",
  buyerAddress = "Plot 14, Commercial Zone, MP Nagar, Bhopal",
  buyerPhone = "+91 98260 11223",
  consigneeName = "Sharma Traders Depot",
  consigneeAddress = "Warehouse 2, Sector B, Bhopal",
  items = [
    {
      sr: 1,
      name: 'LED Monitor 24" (Full HD IPS)',
      hsn: "847160",
      qty: "2 Pcs",
      rate: "9,500.00",
      taxable: "19,000.00",
      gst: "18%",
      total: "22,420.00",
    },
    {
      sr: 2,
      name: "Wireless Keyboard & Mouse Combo",
      hsn: "847160",
      qty: "3 Pcs",
      rate: "1,200.00",
      taxable: "3,600.00",
      gst: "18%",
      total: "4,248.00",
    },
    {
      sr: 3,
      name: "On-Site System Installation & Setup",
      hsn: "998719",
      qty: "1 Service",
      rate: "2,500.00",
      taxable: "2,500.00",
      gst: "18%",
      total: "2,950.00",
    },
  ],
  taxableTotal = "25,100.00",
  cgst = "2,259.00",
  sgst = "2,259.00",
  grandTotal = "29,618.00",
  totalWords = "Twenty Nine Thousand Six Hundred Eighteen Rupees Only",
  showPaidStamp = true,
}: GstInvoiceMockupSheetProps) {
  return (
    <div
      className={`relative w-full rounded-2xl border border-white/[0.14] bg-[#0A0B10]/98 shadow-[0_25px_70px_rgba(0,0,0,0.85)] backdrop-blur-2xl overflow-hidden flex flex-col ${className}`}
    >
      {/* Window Chrome */}
      <div className="h-8 border-b border-white/[0.10] px-3.5 flex items-center justify-between bg-[#0F111A] shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="size-2 rounded-full bg-rose-500/90" />
          <div className="size-2 rounded-full bg-amber-500/90" />
          <div className="size-2 rounded-full bg-emerald-500/90" />
          <span className="ml-2 font-mono text-[11px] font-bold text-zinc-300">
            TAX-INV / {invoiceNo}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 border border-emerald-400/70 text-emerald-200 flex items-center gap-1 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
            <ShieldCheck className="size-3 text-emerald-300" />
            <span>Step 5: Print Ready</span>
          </span>
        </div>
      </div>

      {/* Invoice Sheet Body */}
      <div className="relative flex-1 p-3 sm:p-3.5 bg-white text-zinc-900 flex flex-col justify-between overflow-hidden text-[10px] leading-tight select-text shadow-inner">
        {/* Step Badge */}
        <div className="mb-1.5 p-1 px-2.5 rounded-md bg-emerald-50 border border-emerald-300 flex items-center justify-between text-[9px] text-emerald-900 shadow-sm">
          <div className="flex items-center gap-1.5 font-bold">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Step 3: Print Ready · A4 Laser &amp; 2&quot;/3&quot; Thermal Format</span>
          </div>
          <span className="font-mono font-bold bg-white px-1.5 py-0.5 rounded border border-emerald-200 text-emerald-800">
            Rule 46 Compliant
          </span>
        </div>

        {/* Company Header */}
        <div className="pb-2 border-b border-zinc-200 flex items-start justify-between">
          <div>
            <h4 className="text-base sm:text-lg font-black text-[#0088CC] tracking-tight">
              Vinimay Technologies Pvt. Ltd.
            </h4>
            <p className="text-[10px] text-zinc-700 mt-0.5">
              Plot 42, Commercial Zone, MP Nagar Zone-II, Bhopal, Madhya Pradesh, India - 462011
            </p>
            <p className="text-[10px] text-zinc-800 font-mono mt-0.5">
              <span className="font-bold text-black">Phone No:</span> +91 87451 23210 &nbsp;|&nbsp;{" "}
              <span className="font-bold text-black">GSTIN:</span> 23AABCV9876K1Z2
            </p>
          </div>
          <div className="shrink-0 text-right">
            <span className="px-2 py-0.5 rounded bg-sky-50 border border-sky-300 text-sky-800 font-bold text-[9px] uppercase tracking-wider">
              Tax Invoice
            </span>
          </div>
        </div>

        {/* Sub Header */}
        <div className="my-1.5 py-1 px-1 border-y-2 border-[#0088CC] flex items-center justify-between">
          <span className="text-xs font-black tracking-wider text-[#0088CC]">
            INVOICE
          </span>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-black uppercase tracking-wider text-zinc-900">
              ORIGINAL FOR RECIPIENT
            </span>
          </div>
        </div>

        {/* Buyer & Consignee Grid */}
        <div className="rounded border transition-all duration-300 grid grid-cols-12 divide-y sm:divide-y-0 sm:divide-x overflow-hidden border-[#0088CC]/60 divide-[#0088CC]/30 bg-white">
          <div className="col-span-12 sm:col-span-5 p-2 space-y-1">
            <div className="flex items-center justify-between pb-1 border-b border-[#0088CC]/20">
              <span className="text-[9px] font-bold text-[#0088CC]">
                Details of Buyer | Billed to:
              </span>
            </div>
            <div className="grid grid-cols-12 gap-0.5 text-[9.5px]">
              <span className="col-span-4 font-semibold text-zinc-700">Name</span>
              <span className="col-span-8 font-bold text-zinc-950">: {buyerName}</span>
              <span className="col-span-4 font-semibold text-zinc-700">Address</span>
              <span className="col-span-8 text-zinc-800 truncate">: {buyerAddress}</span>
              <span className="col-span-4 font-semibold text-zinc-700">Phone</span>
              <span className="col-span-8 text-zinc-800 font-mono">: {buyerPhone}</span>
              <span className="col-span-4 font-semibold text-zinc-700">GSTIN</span>
              <span className="col-span-8 font-mono text-zinc-950 font-bold">: {buyerGstin}</span>
              <span className="col-span-4 font-semibold text-zinc-700">State</span>
              <span className="col-span-8 text-zinc-800">: Madhya Pradesh (23)</span>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-4 p-2 space-y-1">
            <div className="pb-1 border-b border-[#0088CC]/20">
              <span className="text-[9px] font-bold text-[#0088CC]">
                Details of Consignee | Shipped to:
              </span>
            </div>
            <div className="grid grid-cols-12 gap-0.5 text-[9.5px]">
              <span className="col-span-4 font-semibold text-zinc-700">Name</span>
              <span className="col-span-8 font-semibold text-zinc-950">: {consigneeName}</span>
              <span className="col-span-4 font-semibold text-zinc-700">Address</span>
              <span className="col-span-8 text-zinc-800 truncate">: {consigneeAddress}</span>
              <span className="col-span-4 font-semibold text-zinc-700">Country</span>
              <span className="col-span-8 text-zinc-800">: India</span>
              <span className="col-span-4 font-semibold text-zinc-700">State</span>
              <span className="col-span-8 text-zinc-800">: Madhya Pradesh</span>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-3 p-2 space-y-1 bg-[#FAFCFF]">
            <div className="grid grid-cols-12 gap-0.5 text-[9.5px]">
              <span className="col-span-5 font-semibold text-zinc-700">Invoice No</span>
              <span className="col-span-7 font-mono font-bold text-zinc-950">: {invoiceNo}</span>
              <span className="col-span-5 font-semibold text-zinc-700">Date</span>
              <span className="col-span-7 font-mono text-zinc-800">: {date}</span>
              <span className="col-span-5 font-semibold text-zinc-700">Due Date</span>
              <span className="col-span-7 font-mono text-zinc-800">: {dueDate}</span>
              <span className="col-span-5 font-semibold text-zinc-700">Place</span>
              <span className="col-span-7 text-zinc-800">: Bhopal (23)</span>
            </div>
          </div>
        </div>

        {/* Item Table */}
        <div className="mt-1.5 rounded border overflow-hidden transition-all duration-300 border-[#0088CC]/60 relative">
          {showPaidStamp && (
            <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 z-10 rotate-[-12deg] rounded-xl border-4 border-emerald-500 bg-white/90 px-4 py-1 text-2xl font-black tracking-widest text-emerald-600 shadow-xl opacity-85">
              PAID
            </div>
          )}

          <table className="w-full text-left text-[9px]">
            <thead className="bg-[#E0F2FE] border-b border-[#0088CC]/40 text-[#0369A1] font-bold">
              <tr>
                <th className="py-1 px-1.5 text-center w-7 border-r border-[#0088CC]/30">Sr.</th>
                <th className="py-1 px-2 border-r border-[#0088CC]/30">Name of Product/Service</th>
                <th className="py-1 px-1.5 text-center border-r border-[#0088CC]/30">HSN/SAC</th>
                <th className="py-1 px-1.5 text-center border-r border-[#0088CC]/30">Qty</th>
                <th className="py-1 px-2 text-right border-r border-[#0088CC]/30">Rate (Rs.)</th>
                <th className="py-1 px-2 text-right border-r border-[#0088CC]/30">Taxable Value (Rs.)</th>
                <th className="py-1 px-1.5 text-center border-r border-[#0088CC]/30">GST</th>
                <th className="py-1 px-2 text-right">Total (Rs.)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0088CC]/20 font-mono text-[9.5px] text-zinc-800">
              {items.map((item) => (
                <tr key={item.sr} className="hover:bg-sky-50/40">
                  <td className="py-1 px-1.5 text-center text-zinc-600 border-r border-[#0088CC]/20">
                    {item.sr}
                  </td>
                  <td className="py-1 px-2 font-sans font-medium text-zinc-950 border-r border-[#0088CC]/20">
                    {item.name}
                  </td>
                  <td className="py-1 px-1.5 text-center text-zinc-600 border-r border-[#0088CC]/20">
                    {item.hsn}
                  </td>
                  <td className="py-1 px-1.5 text-center text-zinc-800 border-r border-[#0088CC]/20">
                    {item.qty}
                  </td>
                  <td className="py-1 px-2 text-right text-zinc-800 border-r border-[#0088CC]/20">
                    {item.rate}
                  </td>
                  <td className="py-1 px-2 text-right text-zinc-800 border-r border-[#0088CC]/20">
                    {item.taxable}
                  </td>
                  <td className="py-1 px-1.5 text-center border-r border-[#0088CC]/20">
                    <span className="text-[8.5px] px-1 py-0.5 rounded bg-purple-50 text-purple-700 font-bold border border-purple-200">
                      {item.gst}
                    </span>
                  </td>
                  <td className="py-1 px-2 text-right font-bold text-zinc-950">
                    {item.total}
                  </td>
                </tr>
              ))}
              <tr className="bg-[#EBF7FD] font-bold text-zinc-950 border-t border-[#0088CC]/40">
                <td
                  colSpan={3}
                  className="py-1 px-2 text-right uppercase tracking-wider text-zinc-700 border-r border-[#0088CC]/30"
                >
                  Total
                </td>
                <td className="py-1 px-1.5 text-center border-r border-[#0088CC]/30">6 Units</td>
                <td className="py-1 px-2 border-r border-[#0088CC]/30" />
                <td className="py-1 px-2 text-right text-zinc-900 border-r border-[#0088CC]/30">
                  {taxableTotal}
                </td>
                <td className="py-1 px-1.5 border-r border-[#0088CC]/30" />
                <td className="py-1 px-2 text-right text-emerald-700 font-black">
                  {grandTotal}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Total In Words */}
        <div className="my-1.5 px-2 py-0.5 rounded border border-[#0088CC]/40 bg-[#F8FAFC] flex items-center justify-between text-[9px]">
          <div>
            <span className="font-bold text-zinc-800">Total In Words : </span>
            <span className="text-zinc-700 italic font-medium">{totalWords}</span>
          </div>
          <span className="text-[8.5px] text-zinc-500 font-mono">E. &amp; O.E.</span>
        </div>

        {/* Bank & Tax Breakdown & Sign */}
        <div className="grid grid-cols-12 gap-2 pt-1 border-t border-zinc-200">
          <div className="col-span-12 sm:col-span-6 space-y-1">
            <div className="p-2 rounded border border-[#0088CC]/40 bg-white space-y-0.5">
              <span className="text-[9px] font-bold text-[#0088CC] block pb-0.5 border-b border-[#0088CC]/20">
                BANK DETAILS
              </span>
              <div className="grid grid-cols-12 gap-0.5 text-[9px] pt-0.5">
                <span className="col-span-4 font-semibold text-zinc-700">Bank Name</span>
                <span className="col-span-8 text-zinc-900 font-medium">: HDFC BANK LTD</span>
                <span className="col-span-4 font-semibold text-zinc-700">Account No</span>
                <span className="col-span-8 font-mono text-zinc-900 font-bold">: 50200084729104</span>
                <span className="col-span-4 font-semibold text-zinc-700">IFSC Code</span>
                <span className="col-span-8 font-mono text-zinc-900">: HDFC0000123</span>
              </div>
            </div>
            <div className="px-2 py-1 rounded bg-[#F8FAFC] border border-zinc-200 text-[8.5px] text-zinc-600 leading-snug">
              <span className="font-bold text-zinc-800">Declaration:</span> Certified that all particulars are true, correct, and electronically generated via Vinimay Cloud.
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 flex flex-col justify-between space-y-1">
            <div className="p-2 rounded border border-[#0088CC]/40 bg-[#F8FAFC] space-y-0.5 text-[9px] font-mono">
              <div className="flex justify-between text-zinc-700">
                <span>Taxable Amount</span>
                <span className="text-zinc-900 font-semibold">Rs. {taxableTotal}</span>
              </div>
              <div className="flex justify-between text-zinc-700">
                <span>CGST (9%)</span>
                <span className="text-zinc-900 font-semibold">Rs. {cgst}</span>
              </div>
              <div className="flex justify-between text-zinc-700">
                <span>SGST (9%)</span>
                <span className="text-zinc-900 font-semibold">Rs. {sgst}</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-[#0088CC]/30 font-sans text-xs font-bold text-zinc-950">
                <span>Net Payable</span>
                <span className="font-mono text-emerald-700 font-black text-sm">
                  Rs. {grandTotal}
                </span>
              </div>
            </div>

            <div className="px-2 py-1 rounded border border-[#0088CC]/40 bg-white text-center text-[9px]">
              <div className="font-bold text-zinc-800">For Vinimay Technologies Pvt. Ltd.</div>
              <div className="pt-2 text-[8.5px] text-zinc-600 border-t border-dashed border-zinc-300 mt-1 flex items-center justify-center gap-1">
                <Check className="size-2.5 text-emerald-600 stroke-[3]" />
                <span>Authorised Signatory (Digitally Signed)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
