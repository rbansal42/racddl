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
  title: "Rotaract Club of Delhi Dynamic Leaders",
  description: "Rotaract Club of Delhi Dynamic Leaders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Add safe class name generation to handle potential undefined values
  const fontClasses = [
    geistSans?.variable || "",
    geistMono?.variable || "",
    "antialiased",
    "min-h-screen",
    "flex",
    "flex-col"
  ].filter(Boolean).join(" ");

  return (
    <html lang="en">
      <body className={fontClasses}>
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
