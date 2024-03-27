"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/hooks/LanguageHook";
import {  useState } from "react";

export default function LanguageSwitchTest() {
  const { lang, setLang } = useLanguage();
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (value: "pt-BR" | "en-US") => {
    setLang(value);
    window.location.reload();
    console.log("O idioma selecionado foi:", selectedValue); 
  };

  return (
    <>
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={lang} />
        </SelectTrigger>
        <SelectContent>
          {lang !== "pt-BR" && <SelectItem value="pt-BR">pt-BR</SelectItem>}
          {lang !== "en-US" && <SelectItem value="en-US">en-US</SelectItem>}
        </SelectContent>
      </Select>
    </>
  );
}
