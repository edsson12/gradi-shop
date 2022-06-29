import React, { useState } from "react";
import "./ColorPick.scss";

const ColorPick = (resultado,lista) => {
  

  console.log(lista)
 
  
  const [color, setColor] = useState(1);
  const changeRadio = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="o-cp-container">
      <p>Colors:</p>
      <label className="custom-radio-btn">
        <input
          type="radio"
          id="radio1"
          value={1}
          checked={color == 1 ? true : false}
          onChange={changeRadio}
        />
        <span className="checkmark"></span>
      </label>

      <label className="custom-radio-btn">
        <input
          type="radio"
          id="radio2"
          value={2}
          checked={color == 2 ? true : false}
          onChange={changeRadio}
        />
        <span className="checkmark"></span>
      </label>
      <p>{color}</p>
      
      
    </div>
  );
};

export default ColorPick;
