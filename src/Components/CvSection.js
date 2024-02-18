import React from "react";
import HistoryList from "./HistoryList";
import { Accordion } from "react-bootstrap";
import hexagone from '../IMG/hexagone.svg';

function CvSection( props ){
  const section = props.section;
  const id = section.getAttribute("xml:id");
  const title = section.querySelector("title").innerHTML;
  const titleFirstLetter = title.charAt(0);
  const titleReminder = title.substring(1);
  const history = section.querySelector("itemizedlist[role='history']");
  
  return(
    <Accordion.Item eventKey={id} key={id} className="cvSection">
      <Accordion.Header>
        <img src={hexagone} alt="hexagone" className="hexagone"/>

          <span className="section-title__First-letter">{titleFirstLetter}</span>
          <span>{titleReminder}</span>

        </Accordion.Header>
      { history
        ? <HistoryList history={history} sectionId={id} />
        : ""  
      }
    </Accordion.Item>
  )
}

export default CvSection