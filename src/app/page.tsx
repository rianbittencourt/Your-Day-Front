"use client";
import LoginRegister from "@/components/LoginRegister/LoginRegister";
import Header from "@/components/Header/Header";
import { Locale } from "@/config/i18n.config";
import Faq from "@/components/Faq/Faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-20 bg-primary">
      <LoginRegister />
    </main>
  );
}
