import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import DatePara from './DatePara';
import EntitledPara from './EntitledPara';
import EstablishmentPara from './EstablishmentPara';
import DescriptionPara from './DescriptionPara';
import Container from 'react-bootstrap/Container';

function HistoryItem(props) {
  const item = props.item;
  const datePara = item.querySelector("simpara[role='date']");
  const entitled = item.querySelector("simpara[role='entitled']");
  const establishment = item.querySelector("simpara[role='establishment']")
  const descriptions = item.querySelectorAll("simpara[role='description']")

  return (
    <Container>
      <Row className='history-item'>
        <Col className='g-0' md={2}>
          <DatePara datePara={datePara} />
        </Col>
        <Col xs={10} md={10} className='g-0'>
          {
            entitled
              ? <EntitledPara entitled={entitled} />
              : ""
          }
          {
            establishment
              ? <EstablishmentPara establishment={establishment} />
              : ""
          }
          {
            descriptions
              ? Array.from( descriptions ).map( description => <DescriptionPara description={description} /> )
              : ""
          }
        </Col>
      </Row>
    </Container>
  )

}

export default HistoryItem;