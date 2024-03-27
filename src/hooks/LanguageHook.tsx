import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
} from "react";
import { Locale } from "@/config/i18n.config"; // Importe o tipo Locale aqui

// Definindo o tipo do contexto
type LanguageContextType = {
  lang: Locale;
  setLang: React.Dispatch<React.SetStateAction<Locale>>;
};

// Criando o contexto
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Função para obter a localidade do navegador
function getUserLocale(): Locale {
  if (typeof navigator !== "undefined") {
    return (navigator.language || "en-US") as Locale;
  } else {
    // Em ambientes onde navigator não está disponível, retorne uma localidade padrão
    return "en-US";
  }
}

function isLanguageSupported(lang: Locale): boolean {
  const supportedLanguages: Locale[] = ["en-US", "pt-BR"];
  return supportedLanguages.includes(lang);
}

// Custom Hook para gerenciar o idioma
export function useLanguage(): LanguageContextType {
  const [lang, setLang] = useState(() => {
    let storedLang: Locale | null = null;
    if (typeof window !== "undefined") {
      storedLang = localStorage.getItem("lang") as Locale | null;
    }
    return storedLang || getUserLocale();
  });

  useEffect(() => {
    if (!isLanguageSupported(lang)) {
      const userLocale = getUserLocale();
      if (isLanguageSupported(userLocale)) {
        setLang(userLocale);
      } else {
        setLang("en-US");
      }
    }
  }, [lang]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
    }
  }, [lang]);

  return { lang, setLang };
}

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider"
    );
  }
  return context;
};

export const LanguageProvider: React.FC<{
  children: ReactNode;
  lang: Locale;
}> = ({ children }) => {
  const { lang, setLang } = useLanguage();

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
