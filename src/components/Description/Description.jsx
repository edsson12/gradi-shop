import React from "react";
import "./Description.scss";

const Description = ({resultado}) => {

    //console.log(resultado.description)
  return (
    <div className="o-descr-cont">
      <p>
       {resultado.description}
      </p>
    </div>
  );
};

export default Description;
