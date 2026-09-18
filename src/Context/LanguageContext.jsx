import { useLayoutEffect, useState } from "react";
import { english } from "../data/english";
import { LanguageContext } from "./contexts";
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem("language") === "en" ? "en" : "es";
    } catch {
      return "es";
    }
  });
  useLayoutEffect(() => {
    document.documentElement.lang = language;
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches)
      document.querySelector("main")?.animate([{ opacity: 0.75 }, { opacity: 1 }], { duration: 220, easing: "ease-out" });
    try {
      localStorage.setItem("language", language);
    } catch {}
  }, [language]);
  const t = (text) => (language === "en" ? (english[text] ?? text) : text);
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>
    {children}
  </LanguageContext.Provider>;
};
