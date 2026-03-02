import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import useDarkMode from "../hooks/useDarkMode";
import { useEffect } from "react";

function DarkmodeToggle() {
  const { isDarkmode, toggleIsDarkmode } = useDarkMode();

  useEffect(() => {
    if (isDarkmode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkmode]);
  return (
    <ButtonIcon onClick={toggleIsDarkmode}>
      {isDarkmode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkmodeToggle;
