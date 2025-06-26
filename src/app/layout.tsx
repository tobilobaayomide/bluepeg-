import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { poppins, montserrat } from "../fonts";
import "./globals.css";
import Navigation from "../components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bluepeg - Industrial Operations Excellence | Automation & Engineering Solutions",
  description: "Bluepeg is a people-first industrial operations company driving innovation and sustainable growth across Nigeria. Specializing in industrial automation, instrumentation & control, and manpower development.",
  keywords: "industrial automation, engineering solutions, instrumentation, control systems, Nigeria, manufacturing, Industry 4.0",
  authors: [{ name: "Bluepeg Digital Team" }],
  metadataBase: new URL('https://bluepeg.com'),
  openGraph: {
    title: "Bluepeg - Industrial Operations Excellence",
    description: "Transform your industrial operations with cutting-edge automation solutions and expert engineering services.",
    url: "https://bluepeg.com",
    siteName: "Bluepeg",
    images: [
      {
        url: "/hero-industrial.jpg",
        width: 1200,
        height: 630,
        alt: "Bluepeg Industrial Operations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluepeg - Industrial Operations Excellence",
    description: "Transform your industrial operations with cutting-edge automation solutions and expert engineering services.",
    images: ["/hero-industrial.jpg"],
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
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#007BFF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
