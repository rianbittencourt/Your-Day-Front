"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@/hooks/ThemeContext";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <ThemeProvider initialTheme="dark">{children}</ThemeProvider>;
}
