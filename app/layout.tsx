import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Big Lou Mobile Welding & Metal Fabrication | Nassau County NY | 24/7 Emergency Service",
  description: "Professional mobile welding in Nassau County. On-site metal fabrication, construction equipment repair, MIG/TIG/Arc welding. 24-hour emergency service. Call (516) 265-9889.",
  keywords: "mobile welding nassau, metal fabrication nassau county, on site welding, construction equipment repair, truck welding, welder nassau, emergency welding service, aluminum welding, stainless steel welding",
  authors: [{ name: "Big Lou Mobile Welding and Metal Fabrication Service" }],
  robots: "index, follow",
  openGraph: {
    title: "Big Lou Mobile Welding & Metal Fabrication | Nassau County NY",
    description: "On-site welding and metal fabrication services. We come to you! 24-hour emergency service available. Call (516) 265-9889.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Lou Mobile Welding | Nassau County",
    description: "Professional mobile welding & metal fabrication. 24/7 emergency service. Call (516) 265-9889.",
  },
  alternates: {
    canonical: "https://bigloumobilewelding.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}

