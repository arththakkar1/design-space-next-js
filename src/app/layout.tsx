import type { Metadata } from "next";
import { Manrope, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "DesignSpace | Premium Interior Design",
  description: "Personalized interiors crafted with style and comfort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>{children}</body>
    </html>
  );
}
