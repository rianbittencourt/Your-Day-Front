"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@/hooks/ThemeContext";
import { useLanguage } from "@/hooks/LanguageHook";
import { LanguageProvider } from "@/hooks/LanguageHook";
import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps): JSX.Element {
  const { lang } = useLanguage();

  return (
    <SessionProvider>
      <ThemeProvider>
        <LanguageProvider lang={lang}>
          <html lang={lang}>{children}</html>
        </LanguageProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
