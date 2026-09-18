import { useEffect, useState } from "react";
import { ThemeContext } from "./contexts";
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains("dark"));
  useEffect(() => {
    const media = matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      let saved;
      try {
        saved = localStorage.getItem("theme");
      } catch {}
      if (saved !== "light" && saved !== "dark") {
        setDarkMode(media.matches);
        document.documentElement.classList.toggle("dark", media.matches);
      }
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };
  return <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
    {children}
  </ThemeContext.Provider>;
};
