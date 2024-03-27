"use client";
import { ThemeProvider } from "@/hooks/ThemeContext";
import React, { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <ThemeProvider initialTheme="dark">{children}</ThemeProvider>;
}
