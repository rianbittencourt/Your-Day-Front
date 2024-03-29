import React from "react";
import SwitchTheme from "../ThemeSwtich/SwitchTheme";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMdSettings } from "react-icons/io";
import LanguageSwitchTest from "../LanguageSwitch/LanguageSwitchTest";
import { useLanguage } from "@/hooks/LanguageHook";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionaries-use-client";

export default function SettingsButton() {
  const { lang } = useLanguage();
  const t = getDictionaryUseClient(lang);
  return (
    <div className="flex items-center justify-center ml-5">
      <Sheet>
        <SheetTrigger>
          {" "}
          <IoMdSettings className="text-3xl hover:text-[#1CC0A9]" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{t.settings.title}</SheetTitle>
          </SheetHeader>
          <div className="mt-10 flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <SwitchTheme />
              <p>{t.settings.theme}</p>
            </div>
            <div className="flex gap-5 items-center">
              <LanguageSwitchTest />
              <p>{t.settings.language}</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
