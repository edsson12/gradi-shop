import React, { useState } from "react";
import Drag from "../Drag/Drag";
import "./ColorPick.scss";

const ColorPick = ({ resultado, lista, uniqueColor, options, setOptions }) => {
  const red = lista.filter(function (filtrado) {
    return filtrado.option1 == "Black";
  });

  const black = lista.filter(function (filtrado) {
    return filtrado.option1 == "Black";
  });


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
            //checked={color === "red" ? true : false}
            onChange={changeRadio}
          />
          <span className="checkmark"></span>
        </label>
      ))}
      

      {/* 
      <label className="custom-radio-btn">
        <input
          type="radio"
          id="radio2"
          value={2}
          checked={color == 2 ? true : false}
          onChange={changeRadio}
        />
        <span className="checkmark"></span>
      </label> */}
      <p>{color}</p>
    </div>
  );
};

export default ColorPick;
