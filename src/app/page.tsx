"use client";
import { useLanguageContext } from "@/hooks/LanguageHook";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionaries-use-client";

export default function Home() {
  const { lang } = useLanguageContext();
  const t = getDictionaryUseClient(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-20 bg-primary">
      <h1>{t.register.title}</h1>
    </main>
  );
}
