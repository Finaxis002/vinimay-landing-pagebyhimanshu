import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Vinimay - Billing, Accounting, POS & WhatsApp. One Software, Zero Cost.",
  description:
    "Vinimay - 100% Free Billing, Accounting, POS & WhatsApp invoicing software for businesses, restaurants, gyms, and retail.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${caveat.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="bg-mesh text-slate-800 font-sans antialiased selection:bg-[#6B62D2] selection:text-white min-h-screen overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
