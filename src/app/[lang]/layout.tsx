import { Providers } from "./providers";
import "../../index.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { i18n } from "@/config/i18n.config";

import Header from "@/components/Header/Header";

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({ lang }));
  return languages;
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
