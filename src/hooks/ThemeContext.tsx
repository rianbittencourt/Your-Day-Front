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
  initialTheme?: string;
  children: ReactNode;
}

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    if (window.localStorage) {
      const storedPrefs = window.localStorage.getItem("color-theme");
      if (typeof storedPrefs === "string") {
        return storedPrefs;
      }
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light";
};

export const ThemeProvider = ({
  initialTheme,
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>(getInitialTheme());

  useEffect(() => {
    const rawSetTheme = (newTheme: string) => {
      const root = document.documentElement;
      const isDark = newTheme === "dark";

      root.classList.remove(isDark ? "light" : "dark");
      root.classList.add(newTheme);

      localStorage.setItem("color-theme", newTheme);
    };

    if (initialTheme) {
      rawSetTheme(initialTheme);
    }

    rawSetTheme(theme);
  }, [initialTheme, theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
