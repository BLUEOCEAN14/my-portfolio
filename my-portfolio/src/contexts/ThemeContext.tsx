import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeType = "light" | "dark" | "device";

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const saved = localStorage.getItem("theme");
    return (saved as ThemeType) || "device";
  });

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);

    const getSystemTheme = () => {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    };

    const updateTheme = () => {
      const effectiveTheme = theme === "device" ? getSystemTheme() : theme;
      setIsDark(effectiveTheme === "dark");

      // CSS 변수 업데이트
      const root = document.documentElement;
      if (effectiveTheme === "dark") {
        root.style.setProperty("--bg-primary", "#0a0a0a");
        root.style.setProperty("--bg-secondary", "#1a1a1a");
        root.style.setProperty("--text-primary", "#ffffff");
        root.style.setProperty("--text-secondary", "#a0a0a0");
        root.style.setProperty("--border-color", "#333333");
      } else {
        root.style.setProperty("--bg-primary", "#ffffff");
        root.style.setProperty("--bg-secondary", "#f8f9fa");
        root.style.setProperty("--text-primary", "#1a1a1a");
        root.style.setProperty("--text-secondary", "#666666");
        root.style.setProperty("--border-color", "#e0e0e0");
      }
    };

    updateTheme();

    // 시스템 테마 변경 감지
    if (theme === "device") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", updateTheme);
      return () => mediaQuery.removeEventListener("change", updateTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
