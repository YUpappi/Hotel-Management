import { createContext, useContext } from "react";

export const DarkModeContext = createContext();
function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkMode context was used outside context provider");
  return context;
}

export default useDarkMode;
