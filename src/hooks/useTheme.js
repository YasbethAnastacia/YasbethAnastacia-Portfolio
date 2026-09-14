import { useContext } from "react";
import { ThemeContext } from "../Context/contexts";
export const useTheme = () => useContext(ThemeContext);
