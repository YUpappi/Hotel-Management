import { useEffect, useRef } from "react";

function useOutsideClick(handler, capturingEvent = true) {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener("click", handleClick, capturingEvent);
    return () => {
      document.removeEventListener("click", handleClick, capturingEvent);
    };
  }, [handler, capturingEvent]);
  return ref;
}

export default useOutsideClick;
