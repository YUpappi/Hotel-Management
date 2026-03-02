import { useLocalStorageState } from "../hooks/useLocalStorageState";
import PropTypes from "prop-types";
import { DarkModeContext } from "../hooks/useDarkMode";

function DarkModeProvider({ children }) {
  const [isDarkmode, setIsDarkmode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkmode",
  );

  const toggleIsDarkmode = () => {
    setIsDarkmode((dark) => !dark);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkmode, toggleIsDarkmode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
export default DarkModeProvider;

DarkModeProvider.propTypes = {
  children: PropTypes.node,
};
