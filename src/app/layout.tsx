import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apexium Dev - Student-Led Web Development Agency",
  description: "We are a student-led web development agency specializing in creating modern, responsive websites for local businesses. Join our team or let us help bring your digital vision to life.",
  keywords: ["web development", "student developers", "website design", "UX/UI design", "static websites", "local business websites"],
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
