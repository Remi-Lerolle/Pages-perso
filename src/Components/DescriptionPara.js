import React from "react";

export default function DescriptionPara({description}){
  console.log("description");
  console.log(description);
 return (
  <p className="history__description">{description.innerHTML}</p>
 )
}