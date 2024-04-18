"use client";
import React from "react";
import { FaPen, FaBookOpen } from "react-icons/fa6";
import { useLanguage } from "@/hooks/LanguageHook";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionaries-use-client";

interface Stat {
  name: string;
  count: string;
  icon: JSX.Element;
}

export default function StatsCount() {
  const { lang } = useLanguage();
  const t = getDictionaryUseClient(lang);

  const stats: Stat[] = [
    {
      name: t.profile.card1,
      count: "0",
      icon: <FaPen className="text-4xl opacity-25" />,
    },
    {
      name: t.profile.card2, // Assuming there's a key 'readings' in your translation JSON
      count: "0",
      icon: <FaBookOpen className="text-4xl opacity-25" />,
    },
  ];

  return (
    <div className=" w-full ">
      <h3 className="text-base font-semibold leading-6 text-primary/25">
        {t.profile.activivies}
      </h3>
      <dl className="mt-5 grid   gap-5 grid-cols-2">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-primary px-4 py-5 sm:p-6 shadow-2xl relative"
          >
            <dt className="truncate text-sm font-medium text-primary">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-text-primary">
              {item.count}
            </dd>
            <div className="absolute top-10 right-5 sm:right-10">
              {item.icon}
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}
