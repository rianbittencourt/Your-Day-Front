import { useState, createContext, useEffect, ReactNode } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<string>("light");

  const setTheme = (newTheme: string) => {
    const root = document.documentElement;
    const isDark = newTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(newTheme);

    localStorage.setItem("color-theme", newTheme);
    setThemeState(newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("color-theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
      setTheme(userMedia.matches ? "dark" : "light");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
