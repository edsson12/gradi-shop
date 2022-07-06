import React from "react";
import "./Size.scss";

const Size = ({  uniqueSizes, options, setOptions }) => {


  
  const clean =(size)=>{
    setOptions([...options, size]);
    

  }

  return (
    <div className="o-size-container">
      <p>Size:</p>
      <div className="o-boxes-cont">
      {uniqueSizes.map((size, index) => (
        <div 
        className="o-number-cont"
          key={index}
          onClick={() => clean(size)}
         
         
        >
          <h4  key={index}>{size}</h4>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Size;
