import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import { ThemeToggle } from "./theme-toggle";
import CustomCursor from "@/components/Cursor";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThanasisPersonal",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className= {`${geistSans.variable} ${geistMono.variable} antialiased cursor-none`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <CustomCursor />
          <ThemeToggle/>
          <Navbar />
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
