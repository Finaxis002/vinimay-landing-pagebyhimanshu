import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat, Bricolage_Grotesque } from "next/font/google";
import ScrollToTop from "@/components/common/ScrollToTop";
import PageTransition from "@/components/common/PageTransition";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
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
      className={`${plusJakartaSans.variable} ${caveat.variable} ${bricolageGrotesque.variable}`}
    >
      <body
        suppressHydrationWarning
        className="bg-mesh text-slate-800 font-sans antialiased selection:bg-primary selection:text-white min-h-screen overflow-x-clip"
      >
        <ScrollToTop />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
