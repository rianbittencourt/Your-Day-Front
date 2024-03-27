"use client";
import React from "react";
import { useLanguage } from "@/hooks/LanguageHook";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionaries-use-client";
import Link from "next/link";
export default function MenuDesktop() {
  const { lang } = useLanguage();
  const t = getDictionaryUseClient(lang);

  const { menuItems } = t;

  return (
    <ul className="text-primary gap-5 font-medium sm:flex hidden">
      {Object.values(menuItems).map((menuItem) => (
        <li
          className="hover:text-[#1CC0A9] cursor-pointer delay-100"
          key={menuItem.title}
        >
          <Link href={menuItem.href}>{menuItem.title}</Link>
        </li>
      ))}
    </ul>
  );
}
