import type { Metadata } from "next";
import {Raleway} from "next/font/google";
import {Barlow_Condensed} from "next/font/google";
import "./globals.css";
import {Header} from '@/Components/Header'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
})
  	
const barlowCondensed = Barlow_Condensed({
    weight: '600',
    subsets: ['latin'],
    variable: '--font-barlow-condensed',
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${barlowCondensed.variable} antialiased bg-black text-white`}
        >
        <Header />
        {children}
      </body>
    </html>
  );
}
