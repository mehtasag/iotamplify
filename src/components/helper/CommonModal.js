// import "./CommonModal.css";
import { useRef } from "react";

import { useEventListener } from "./useEventListener";
function CommonModal({ children, styleClass, onClose }) {
  const dialogRef = useRef();

  useEventListener(
    "mousedown",

    (event) => {
      if (event.defaultPrevented) {
        return;
      }

      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        console.log("Click outside dialog");
        onClose();
      }
    }
  );
  return (
    <div
      ref={dialogRef}
      className={`${
        styleClass != null ? styleClass : "modals scale-up-ver-center"
      }`}
    >
      {children}
    </div>
  );
}

export default CommonModal;
