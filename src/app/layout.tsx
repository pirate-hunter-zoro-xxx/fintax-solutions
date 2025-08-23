import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinTax Solutions - Professional Financial Services",
  description: "Your comprehensive partner for GST compliance, tax planning, audit services, and complete financial management solutions.",
  keywords: "tax services, GST, financial planning, audit, accounting, business consulting, FinTax Solutions",
  authors: [{ name: "FinTax Solutions" }],
  creator: "FinTax Solutions",
  publisher: "FinTax Solutions",
  metadataBase: new URL('https://fintax-solutions.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fintax-solutions.vercel.app',
    title: 'FinTax Solutions - Professional Financial Services',
    description: 'Your comprehensive partner for GST compliance, tax planning, audit services, and complete financial management solutions.',
    siteName: 'FinTax Solutions',
    images: [
      {
        url: '/images/fintax-logo.svg',
        width: 1200,
        height: 630,
        alt: 'FinTax Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FinTax Solutions - Professional Financial Services',
    description: 'Your comprehensive partner for GST compliance, tax planning, audit services, and complete financial management solutions.',
    images: ['/images/fintax-logo.svg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#1374BA' },
    ],
  },
  manifest: '/site.webmanifest',
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#1374BA',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#111722] text-white`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
