import React from "react";
import "./Description.scss";

const Description = ({resultado}) => {

  var descrip = resultado.description;
  var n=28;
    
  return (
    <div className="o-descr-cont">
      <p>
       {descrip.substring(n).slice(0,-7)}
      </p>
    </div>
  );
};

export default Description;
