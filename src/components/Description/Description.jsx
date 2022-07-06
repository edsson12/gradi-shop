import React from "react";
import "./Description.scss";

const Description = ({descrip}) => {

  
  const descripText= descrip.substring(28).slice(0,-7);

 
    
  return (
    <div className="o-descr-cont">
      <p>
       {descripText}
      </p>
    </div>
  );
};

export default Description;
