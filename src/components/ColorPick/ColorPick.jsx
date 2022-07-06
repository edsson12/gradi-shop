import React, { useState } from "react";

import "./ColorPick.scss";

const ColorPick = ({uniqueColor, options, setOptions }) => {
  

  const [color, setColor] = useState(1);
  const changeRadio = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="o-cp-container">
      <p>Colors:</p>
      {uniqueColor.map((color, i) => (
        <label className="custom-radio-btn">
          <input
            onClick={() => setOptions([...options, color])}
            type="radio"
            id={i}
            key={color}
            value={color}
            onChange={changeRadio}
          />
          <span className="checkmark"></span>
        </label>
      ))}
    
      <p>{color}</p>
    </div>
  );
};

export default ColorPick;
