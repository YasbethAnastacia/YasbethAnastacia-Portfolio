import { useContext } from "react";
import { LanguageContext } from "../Context/contexts";
export const useLanguage = () => useContext(LanguageContext);
