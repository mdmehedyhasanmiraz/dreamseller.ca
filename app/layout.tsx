import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import ogImage from "@/public/opengraph-image.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DreamSellers - Building Dreams Into Reality",
    template: "%s | DreamSellers"
  },
  description:
    "DreamSellers is a premier real estate development company that transforms visions into exceptional living and working spaces. We specialize in luxury residential and commercial projects with innovative design and sustainable practices.",
  keywords: [
    "real estate development",
    "luxury properties",
    "residential projects",
    "commercial real estate",
    "property development",
    "construction company",
    "real estate investment",
    "property management",
    "architectural design",
    "sustainable building",
    "smart homes",
    "premium properties",
    "real estate services",
    "property consultation",
    "real estate Canada",
    "dreamsellers",
    "real estate developer"
  ],
  authors: [
    {
      name: "DreamSellers",
      url: "https://dreamseller.ca"
    }
  ],
  creator: "DreamSellers",
  publisher: "DreamSellers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dreamseller.ca"),
  alternates: {
    canonical: "https://dreamseller.ca",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    title: "DreamSellers - Building Dreams Into Reality",
    description:
      "DreamSellers is a premier real estate development company that transforms visions into exceptional living and working spaces. We specialize in luxury residential and commercial projects with innovative design and sustainable practices.",
    url: "https://dreamseller.ca",
    siteName: "DreamSellers",
    images: [
      {
        url: ogImage.src,
        alt: "DreamSellers - Premier Real Estate Development Company",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DreamSellers - Building Dreams Into Reality",
    description:
      "DreamSellers is a premier real estate development company that transforms visions into exceptional living and working spaces. We specialize in luxury residential and commercial projects with innovative design and sustainable practices.",
    creator: "@dreamsellers",
    site: "@dreamsellers",
    images: [
      {
        url: ogImage.src,
        alt: "DreamSellers - Premier Real Estate Development Company",
      },
    ],
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
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "real estate",
  classification: "real estate development",
  other: {
    "geo.region": "CA",
    "geo.placename": "Canada",
    "geo.position": "43.6532;-79.3832",
    "ICBM": "43.6532, -79.3832",
    "DC.title": "DreamSellers - Building Dreams Into Reality",
    "DC.creator": "DreamSellers",
    "DC.subject": "Real Estate Development",
    "DC.description": "Premier real estate development company specializing in luxury residential and commercial projects",
    "DC.publisher": "DreamSellers",
    "DC.contributor": "DreamSellers",
    "DC.date": "2024-12-01",
    "DC.type": "Text",
    "DC.format": "text/html",
    "DC.identifier": "https://dreamseller.ca",
    "DC.language": "en",
    "DC.coverage": "Canada",
    "DC.rights": "Copyright © 2024 DreamSellers. All rights reserved.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  applicationName: "DreamSellers",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
