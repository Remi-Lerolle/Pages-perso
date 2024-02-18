import React from "react";
import { Col } from "react-bootstrap";

function EstablishmentPara( props ){
  const establishment = props.establishment;

  return <p>{establishment.innerHTML}</p> 
}

export default EstablishmentPara;