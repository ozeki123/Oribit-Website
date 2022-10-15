import React from "react";
import "./InputBorder.scss";

const InputBorder = (props) => {
  return (
    <div className="input-border-container">
      <label>{props.label}</label>
      <input 
        type="text"
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.setTitle(e.target.value)}
      />
    </div>
  )
}

export default InputBorder;
