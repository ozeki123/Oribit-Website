import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideDetect(ref, showCalendar, setShowCalendar) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleOutsideClick(event) {
      if (showCalendar && ref.current && !ref.current.contains(event.target)) {
        // alert("Outside click detected");
        setShowCalendar(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, showCalendar, setShowCalendar]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideDetect(props) {
  console.log(props.showCalendar)
  const wrapperRef = useRef(null);
  useOutsideDetect(wrapperRef, props.showCalendar, props.setShowCalendar);
  

  return <div ref={wrapperRef}>{props.children}</div>;
}