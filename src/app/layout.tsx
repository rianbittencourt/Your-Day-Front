"use client";
import "../index.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { ThemeProvider } from "@/hooks/ThemeContext";
import Header from "@/components/Header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider initialTheme="dark">
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
