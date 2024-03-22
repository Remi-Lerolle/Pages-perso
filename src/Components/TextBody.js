import React from "react";
import { AccordionBody } from "react-bootstrap";
import Para from "./Para";

function TextBody(props){
  const paras = props.listOfParas;
  const title = props.title;

  return(
    <AccordionBody>
      {
        [...paras].map( (para,index) => {
          return <Para content={para} key={`${title}-${index}`} />
        })
      }
    </AccordionBody>
  )
}

export default TextBody;