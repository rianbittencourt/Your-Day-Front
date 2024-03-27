"use client";
import Switch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "@/hooks/ThemeContext";
import { useLanguage } from "@/hooks/LanguageHook";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { useLanguageContext } from "@/hooks/LanguageHook";

export default function LanguageSwitch() {
  const { lang, setLang } = useLanguageContext();

  const toggleLanguage = () => {
    const newLang = lang === "en-US" ? "pt-BR" : "en-US";
    setLang(newLang);
  };

  return (
    <div>
      <Switch
        onChange={toggleLanguage}
        checked={lang === "pt-BR"}
        checkedIcon={false}
        uncheckedIcon={false}
        className=" relative"
        uncheckedHandleIcon={
          <MdLightMode className="text-center mx-auto mt-1 text-[#333]" />
        }
        checkedHandleIcon={
          <MdNightlight className="text-center mx-auto mt-1 text-white" />
        }
        onColor="#f5f5f5"
        offColor="#333"
        onHandleColor="#333"
        offHandleColor="#F5F5F5"
      />
    </div>
  );
}
