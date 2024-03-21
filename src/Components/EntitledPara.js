import React from "react";

function EntitledPara( props ){
  const entitled = props.entitled;
  return  <p className="entitled">{entitled.innerHTML}</p>
  
}

export default EntitledPara;