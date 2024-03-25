"use client";
import "../styles/global.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import SwitchTheme from "@/components/SwitchTheme/SwitchTheme";
import { ThemeProvider } from "@/hooks/ThemeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider initialTheme="dark">
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
