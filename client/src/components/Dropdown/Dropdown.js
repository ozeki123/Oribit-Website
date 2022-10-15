import React, { useState } from "react";
import "./Dropdown.scss";
import timeImage from "../../assets/icons/icons8-clock (1).svg";

export const Dropdown = ({data, holder}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="dropdown-container">
      <div className="dropdown-wrapper">
        <button 
          onClick={toggleOpen}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          type="button"
        >
            <span className="dropdown-label">Check in</span>
            <span className="dropdown-value">Select Time</span>
            <span className="dropdown-icon"><img src={timeImage}/></span>
        </button>
        <ul className={`dropdown-options ${isOpen ? "": "hide"}`} aria-activedescendant={data[selected]} role="listbox" tabIndex={-1}>
          {
            data.map((option, index) => (
              <li 
                id={option} 
                role="option" 
                aria-selected={selected === index}
                tabIndex={0}
                onClick={()=> {
                  //Set selected option and close dropdown on select
                  setSelected(index);
                  setIsOpen(false);
                }}
              >{option}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
