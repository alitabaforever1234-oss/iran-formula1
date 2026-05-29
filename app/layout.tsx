import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iran Formula 1",
  description: "مرجع فارسی فرمول ۱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-[#071B3A] text-white">
        
        {/* Navbar */}
       <Navbar />

        {/* Page Content */}
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}