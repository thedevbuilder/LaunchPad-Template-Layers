import type { Metadata } from "next";
import {Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Choose the weights you need
  variable: '--font-poppins',    // This creates a CSS variable
});


export const metadata: Metadata = {
  title: "Landing Page",
  description: "A Saas Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
