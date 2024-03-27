"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@/hooks/ThemeContext";
import { useLanguage } from "@/hooks/LanguageHook";
import { LanguageProvider } from "@/hooks/LanguageHook";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps): JSX.Element {
  const { lang } = useLanguage();

  return (
    <ThemeProvider>
      <LanguageProvider lang={lang}>
        
        <html lang={lang}>{children}</html>
      </LanguageProvider>
    </ThemeProvider>
  );
}
