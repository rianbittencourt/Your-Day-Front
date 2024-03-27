import LoginRegister from "@/components/LoginRegister/LoginRegister";
import Header from "@/components/Header/Header";
import { Locale } from "@/config/i18n.config";
import Faq from "@/components/Faq/Faq";
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionary-server-only";

export default function Home({ params }: { params: { lang: Locale } }) {
  const dict = getDictionaryServerOnly(params.lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-20 bg-primary">
      <LoginRegister params={params} />
    </main>
  );
}
