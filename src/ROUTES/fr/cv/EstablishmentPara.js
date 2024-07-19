import React from "react";

function EstablishmentPara( props ){
  const establishment = props.establishment;

  return <p className="history__establishment">{establishment.innerHTML}</p> 
}

export default EstablishmentPara;