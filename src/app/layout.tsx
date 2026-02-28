import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://youtubemoneycalculator.com"),
  title: {
    default: "YouTube Money Calculator - Estimate Earnings & Revenue 2026",
    template: "%s | YouTube Money Calculator",
  },
  description: "Free YouTube Money Calculator with AI-powered revenue estimates. Calculate YouTube earnings by views, CPM, or channel URL. Get accurate RPM, sponsor values, and income projections.",
  keywords: [
    "youtube money calculator",
    "youtube earnings calculator",
    "youtube revenue calculator",
    "cpm calculator",
    "rpm calculator",
    "youtube income estimator",
    "channel earnings",
    "youtube sponsor calculator",
    "how much do youtubers make",
    "youtube ad revenue",
  ],
  authors: [{ name: "YouTube Money Calculator" }],
  creator: "YouTube Money Calculator",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://youtubemoneycalculator.com",
    siteName: "YouTube Money Calculator",
    title: "YouTube Money Calculator - Estimate Earnings & Revenue 2026",
    description: "Free YouTube Money Calculator with AI-powered revenue estimates. Calculate earnings by views, CPM, or channel URL.",
    images: [
      {
        url: "/upload/youtubemoneycalculator.net.png",
        width: 1200,
        height: 630,
        alt: "YouTube Money Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Money Calculator - Estimate Earnings & Revenue 2026",
    description: "Free YouTube Money Calculator with AI-powered revenue estimates.",
    images: ["/upload/youtubemoneycalculator.net.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://youtubemoneycalculator.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
