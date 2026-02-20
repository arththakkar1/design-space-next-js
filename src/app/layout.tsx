import type { Metadata } from "next";
import { Manrope, Roboto } from "next/font/google";
import "./globals.css";

import LenisProvider from "./lenis";
import { CrosshairCursor } from "@/components/CustomCursor";
import { Nav } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
      <body className={`${manrope.className} antialiased`}>
        <CrosshairCursor />
        <LenisProvider>
          <Nav />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
