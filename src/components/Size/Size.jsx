import React, { useState, useEffect } from "react";
import "./Size.scss";

const Size = ({ lista, uniqueSizes, options, setOptions }) => {

  useEffect(() => {
    
  }, [options]);

  const [mantener, setMantener] = useState(false);
  
  const clean =(size)=>{
    setOptions([...options, size]);
   

  }

  return (
    <div className="o-size-container">
      <p>Size:</p>
      <div className="o-boxes-cont">
      {uniqueSizes.map((size, index) => (
        <div 
          key={index}
          onClick={() => clean(size)}
          className={
            mantener === true ? "o-number-cont-activo" : "o-number-cont"
          }
         
        >
          <h4  key={index}>{size}</h4>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Size;
