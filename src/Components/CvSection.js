import React from "react";
import HistoryList from "./HistoryList";
import { Accordion, Card } from "react-bootstrap";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import hexagone from '../IMG/hexagone.svg';
import TextBody from "./TextBody";

function CvSection( props ){
  const section = props.section;
  const id = section.getAttribute("xml:id");
  const title = section.querySelector("title").innerHTML;
  const titleFirstLetter = title.charAt(0);
  const titleReminder = title.substring(1);
  const history = section.querySelector("itemizedlist[role='history']");
  const paras = section.querySelectorAll("simpara");
  
  return(
    <Accordion.Item eventKey={id} key={id} className="cvSection">
      <Card>
        <Card.Header>
          <CustomToggle eventKey={id} >
            <img src={hexagone} alt="hexagone" className="hexagone"/>
            <span className="section-title__First-letter">{titleFirstLetter}</span>
            <span className="section-title__reminding-letters" >{titleReminder}</span>
          </CustomToggle>
        </Card.Header>
      </Card>
      { 
        history
          ? <HistoryList history={history} sectionId={id} />
          : <TextBody listOfParas={paras} title={title} id={id} />
      }
    </Accordion.Item>
  )
}


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ border:'none', backgroundColor: 'white'  }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default CvSection