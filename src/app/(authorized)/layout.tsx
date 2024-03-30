import { Providers } from "../providers";
import "../../index.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Your Day",
  description: "Escreva sua história",
};

export default function LayoutMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </Providers>
  );
}
