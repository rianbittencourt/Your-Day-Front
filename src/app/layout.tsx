"use client";
import { Inter } from "next/font/google";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./registry";
import { lightTheme } from "@/styles/themes/lightTheme";
import GlobalStyle from "@/styles/global";
import { darkTheme } from "@/styles/themes/darkTheme";
const inter = Inter({ subsets: ["latin"] });
import { useState } from "react";
import SwitchTheme from "@/components/SwitchTheme/SwitchTheme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? darkTheme : lightTheme);
  };
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <body className={inter.className}>
          <SwitchTheme toggleTheme={toggleTheme} />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </ThemeProvider>
    </html>
  );
}
