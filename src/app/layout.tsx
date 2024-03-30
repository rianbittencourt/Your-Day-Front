import { Providers } from "./providers";
import "../index.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Day",
  description: "Escreva sua história",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <body className={inter.className}>{children}</body>
    </Providers>
  );
}
