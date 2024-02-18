import React from "react";

function EntitledPara( props ){
  const entitled = props.entitled;
  return  <p>{entitled.innerHTML}</p>
  
}

export default EntitledPara;