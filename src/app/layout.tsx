import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import { GoogleAnalytics } from '@next/third-parties/google'

const rubik = Rubik({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rubik'
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "Construct.IT",
  description: "Vaš partner u izgradnji",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} ${poppins.className}`}>{children}</body>
      <GoogleAnalytics gaId="G-LVQX8BT6RX" />
    </html>
  );
}
