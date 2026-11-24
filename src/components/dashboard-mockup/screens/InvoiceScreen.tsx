"use client";

import React from "react";
import {
  Download,
  X,
  Sparkles,
  Printer,
  RotateCw,
  MoreVertical,
  Check,
  QrCode,
} from "lucide-react";

export function InvoiceScreen() {
  return (
    <div className="space-y-3 text-slate-800 text-left cursor-default select-none">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
            Invoice Preview
          </h2>
          <p className="text-[11px] text-slate-400 mt-0.5">
            This is a preview of the invoice. You can change the template and download it as a PDF.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#7c5cfc] text-white font-bold text-[11px] shadow-sm shadow-purple-600/25 cursor-default">
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </div>
          <div
            className="w-7 h-7 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center cursor-default"
            aria-label="Close preview"
          >
            <X className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Main Split View: PDF Viewer + Template Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_210px] gap-3">
        {/* PDF Viewer Frame */}
        <div className="bg-[#1f222a] rounded-2xl overflow-hidden border border-slate-700 shadow-xl flex flex-col cursor-default">
          {/* PDF Toolbar */}
          <div className="h-8 bg-[#2d313c] px-3 flex items-center justify-between text-slate-400 text-[10px] border-b border-slate-700/80 shrink-0 cursor-default">
            <div className="flex items-center gap-2">
              <span className="font-mono text-slate-400 text-[9.5px]">b..</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-800/80 text-white font-mono font-bold text-[9px]">
                1 / 1
              </span>
              <span className="text-slate-400">- 65% +</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#7c5cfc]/20 text-purple-300 border border-purple-500/30 font-semibold text-[9.5px]">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Summarize</span>
              </div>
              <Printer className="w-3 h-3 text-slate-400 cursor-default" />
              <Download className="w-3 h-3 text-slate-400 cursor-default" />
              <RotateCw className="w-3 h-3 text-slate-400 cursor-default" />
              <MoreVertical className="w-3 h-3 text-slate-400 cursor-default" />
            </div>
          </div>

          {/* PDF Body Canvas */}
          <div className="flex-1 p-2 sm:p-3 overflow-y-auto bg-[#363a45] flex justify-center cursor-default">
            {/* White Paper Sheet */}
            <div className="w-full max-w-xl bg-white p-3.5 sm:p-4 rounded shadow-2xl text-[9px] text-slate-800 space-y-2 border border-slate-200">
              {/* Gym Header */}
              <div className="flex justify-between items-start border-b border-slate-100 pb-2">
                <div>
                  <h3 className="font-black text-xs text-slate-900 tracking-tight">
                    Dhurandhar Fitness
                  </h3>
                  <p className="text-[8px] text-slate-400 leading-tight">
                    ABC Nagar Bhopal MP India, C.T.T Nagar, Bhopal, Madhya Pradesh, 462003, India
                  </p>
                  <p className="text-[8px] text-slate-500 font-mono mt-0.5">
                    Phone No: +918109224807
                  </p>
                </div>

                {/* Gym Logo Shield */}
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 shadow-sm shrink-0">
                  <div className="text-[10px] font-extrabold tracking-tighter text-center leading-none">
                    <span className="block text-indigo-400 text-[6px]">FIT</span>
                    DF
                  </div>
                </div>
              </div>

              {/* TAX INVOICE Header Bar */}
              <div className="bg-slate-100/90 px-2 py-1 rounded flex items-center justify-between font-bold text-[8.5px] border border-slate-200/80">
                <span className="text-slate-600 font-mono">GSTIN : 23ABCDE1234F1Z5</span>
                <span className="text-slate-900 font-black tracking-wider uppercase">
                  TAX INVOICE
                </span>
                <span className="text-slate-500 font-mono text-[7.5px]">ORIGINAL FOR RECIPIENT</span>
              </div>

              {/* Two Column Details */}
              <div className="grid grid-cols-2 gap-2 text-[8px]">
                <div className="border border-slate-200 p-1.5 rounded bg-slate-50/50">
                  <b className="text-slate-900 block font-bold border-b border-slate-200 pb-0.5 mb-1 text-[8.5px]">
                    MEMBER DETAILS | BILLED TO:
                  </b>
                  <div className="space-y-0.5 text-slate-600">
                    <div>
                      <span className="text-slate-400">Member: </span>
                      <b className="text-slate-800">Kushagra Chouhan</b>
                    </div>
                    <div>
                      <span className="text-slate-400">Phone: </span>
                      <span className="font-mono">+91 7070000000</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Email: </span>
                      <span>kushagra@gmail.com</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Address: </span>
                      <span>10a Nagar, Bhopal</span>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 p-1.5 rounded bg-slate-50/50">
                  <b className="text-slate-900 block font-bold border-b border-slate-200 pb-0.5 mb-1 text-[8.5px]">
                    INVOICE &amp; MEMBERSHIP DETAILS:
                  </b>
                  <div className="space-y-0.5 text-slate-600">
                    <div>
                      <span className="text-slate-400">Invoice No: </span>
                      <b className="font-mono text-slate-800">DFFS202610000</b>
                    </div>
                    <div>
                      <span className="text-slate-400">Invoice Date: </span>
                      <span className="font-mono">31/10/2026</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Payment Mode: </span>
                      <span className="font-bold text-amber-700">Credit</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Joining Fee: </span>
                      <span className="font-mono">₹120</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <table className="w-full text-left text-[8px] border border-slate-200">
                <thead className="bg-slate-100 text-slate-600 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-1">#</th>
                    <th className="p-1">Membership Plan / Service</th>
                    <th className="p-1">Qty</th>
                    <th className="p-1 text-right">Rate</th>
                    <th className="p-1 text-right">Discount</th>
                    <th className="p-1 text-right">Taxable</th>
                    <th className="p-1 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="p-1 font-mono">1</td>
                    <td className="p-1 font-semibold text-slate-900">Pre Workout Shake</td>
                    <td className="p-1 font-mono">1 Piece</td>
                    <td className="p-1 text-right font-mono">₹330.00</td>
                    <td className="p-1 text-right font-mono text-slate-400">₹16.50</td>
                    <td className="p-1 text-right font-mono">₹277.83</td>
                    <td className="p-1 text-right font-mono font-bold text-slate-900">₹313.50</td>
                  </tr>
                  <tr>
                    <td className="p-1 font-mono">2</td>
                    <td className="p-1 font-semibold text-slate-900">
                      15 Session Pack
                      <span className="block text-[7px] text-slate-400">HSN: 999723</span>
                    </td>
                    <td className="p-1 font-mono">2 x 15 Sessions</td>
                    <td className="p-1 text-right font-mono">₹5,500.00</td>
                    <td className="p-1 text-right font-mono text-slate-400">₹0.00</td>
                    <td className="p-1 text-right font-mono">₹11,084.29</td>
                    <td className="p-1 text-right font-mono font-bold text-slate-900">₹12,636.09</td>
                  </tr>
                </tbody>
              </table>

              {/* Footer Summary & QR Code */}
              <div className="flex justify-between items-end pt-1 border-t border-slate-200 text-[8px]">
                <div className="space-y-1">
                  <div className="text-[7.5px] text-slate-500 font-medium">
                    <b>BANK DETAILS:</b> STATE BANK OF INDIA • A/C: 789456123456789
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-[7px]">
                    <div className="w-8 h-8 rounded border border-slate-300 p-0.5 flex items-center justify-center bg-white shadow-2xs">
                      <QrCode className="w-7 h-7 text-slate-800" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-700 block">Scan to Pay UPI</span>
                      <span>Verified BharatQR</span>
                    </div>
                  </div>
                </div>

                <div className="text-right space-y-0.5">
                  <div className="text-slate-500 text-[7.5px]">Gross: ₹11,330.00 | Tax: ₹1,562.44</div>
                  <div className="text-xs font-black text-[#7c5cfc] font-mono">
                    Balance Due: ₹1,029.59
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Template Selector */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-3 shadow-xs space-y-3 cursor-default">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-slate-900 text-xs">Choose Template</span>
              <span className="text-[9.5px] text-slate-400 font-medium">1 layouts</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Select a design to preview and download
            </p>
          </div>

          {/* Template Card */}
          <div className="p-2.5 rounded-xl border-2 border-[#7c5cfc] bg-purple-50/20 shadow-xs space-y-2 cursor-default">
            <div className="flex items-center justify-between text-[9px]">
              <span className="font-bold text-slate-700">● A 4</span>
              <span className="px-2 py-0.5 rounded-full bg-[#7c5cfc] text-white font-bold text-[8px] flex items-center gap-0.5">
                <Check className="w-2.5 h-2.5" />
                <span>Selected</span>
              </span>
            </div>

            {/* Thumbnail Mock */}
            <div className="w-full h-32 rounded-lg bg-white border border-slate-200 p-1.5 shadow-2xs overflow-hidden flex flex-col justify-between">
              <div className="space-y-1">
                <div className="h-1.5 w-1/3 bg-slate-300 rounded" />
                <div className="h-1 w-2/3 bg-slate-100 rounded" />
                <div className="h-3 w-full bg-slate-50 rounded mt-1 border border-slate-100" />
              </div>
              <div className="space-y-1">
                <div className="h-1 w-full bg-slate-100 rounded" />
                <div className="h-1 w-4/5 bg-slate-100 rounded" />
              </div>
            </div>

            <div>
              <b className="text-[11px] font-bold text-slate-900 block">Gym Invoice Template</b>
              <span className="text-[9.5px] text-slate-400 block">Invoice layout preview</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}