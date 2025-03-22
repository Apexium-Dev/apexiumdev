import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://apexiumdev.com'),
  title: {
    default: "Apexium Dev - Student-Led Web Development Agency",
    template: "%s | Apexium Dev"
  },
  description: "We are a student-led web development agency specializing in creating modern, responsive websites for local businesses. Join our team or let us help bring your digital vision to life.",
  keywords: ["web development", "student developers", "website design", "UX/UI design", "static websites", "local business websites"],
  authors: [{ name: "Apexium Dev Team" }],
  creator: "Apexium Dev",
  publisher: "Apexium Dev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Apexium Dev - Student-Led Web Development Agency",
    description: "Modern web development solutions by student developers",
    url: 'https://apexiumdev.com',
    siteName: 'Apexium Dev',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Apexium Dev Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apexium Dev - Student-Led Web Development Agency',
    description: 'Modern web development solutions by student developers',
    images: ['/logo.jpg'],
    creator: '@apexium_dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/logo.jpg',
        sizes: '32x32',
        type: 'image/jpeg',
      },
      {
        url: '/logo.jpg',
        sizes: '16x16',
        type: 'image/jpeg',
      }
    ],
    apple: [
      {
        url: '/logo.jpg',
        sizes: '180x180',
        type: 'image/jpeg',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
