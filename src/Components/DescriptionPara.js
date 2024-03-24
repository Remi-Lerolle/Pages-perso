import React from "react";

export default function DescriptionPara({description}){
 return (
  <p className="history__description">{description.innerHTML}</p>
 )
}