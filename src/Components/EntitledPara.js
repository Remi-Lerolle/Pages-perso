import React from "react";

function EntitledPara( props ){
  const entitled = props.entitled;
  return  <p className="history__entitled">{entitled.innerHTML}</p>
  
}

export default EntitledPara;