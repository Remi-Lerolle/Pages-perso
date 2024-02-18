import React from "react";
import Col from "react-bootstrap/Col";

function DatePara( props ){
  const datePara = props.datePara;
  const startDate = datePara.querySelector("date[role='start']").innerHTML;
  const endDate = datePara.querySelector("date[role='end']").innerHTML;


  return( 
    <>
      {startDate}
      <br />
      {endDate}
    </>
  )
}

export default DatePara;