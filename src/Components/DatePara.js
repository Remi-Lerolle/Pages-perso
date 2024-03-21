import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';

function DatePara(props) {
  const datePara = props.datePara;
  const startDate = datePara.querySelector("date[role='start']")?.innerHTML;
  const endDate = datePara.querySelector("date[role='end']")?.innerHTML;


  return (
    <>
      <Container>
        <Row>
          <Col className="date pl-0">
            <span >{startDate}</span>
          </Col>
        </Row>
        <Row>
          <Col className="date">
            <span >{endDate}</span>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default DatePara;