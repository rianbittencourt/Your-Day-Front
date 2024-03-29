"use client";
import React from "react";
import StatsCount from "../Stats/StatsCount";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionaries-use-client";
import { useLanguage } from "@/hooks/LanguageHook";
interface Stat {
  label: string;
  value: string;
}

const stats: Stat[] = [
  { label: "Total de Escritas", value: "3980" },
  { label: "Total de Leituras", value: "4122" },
  { label: "Acessos", value: "28074" },
];

export default function MainContent() {
  const { lang } = useLanguage();
  const t = getDictionaryUseClient(lang);
  return (
    <div className="mt-10 ">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl border-l-[5px] border-test pl-2">
          {t.home.missionTitle}
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-10 lg:flex-row  ">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto ">
            <p className="text-xl leading-8 text-primary">
              {t.home.missionFirstP} <b>Your Day </b>.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-primary">
              <p>{t.home.missionSecondP}</p>
            </div>
          </div>
          <div className="lg:flex lg:flex-auto   ">
            <StatsCount />
          </div>
        </div>
      </div>
    </div>
  );
}
