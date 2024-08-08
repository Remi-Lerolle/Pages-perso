import React from "react";
import CvSection from "./CvSection";
import CVArticleStyles from "../../CVCSS/CVArticle-Styles.css"
import { Accordion, Container } from "react-bootstrap";

function CvArticle(props){
  const xml=props.xmlResponse;
  if (!xml){
    return;
  }
  const author = xml.querySelector("article info author");
  const firstName = author.querySelector("personname firstname");
  const surName = author.querySelector("personname surname");
  const sectionsList = xml.querySelectorAll( "section" ); 
  
  return(
    <Accordion defaultActiveKey="0">
      {
        Array.from(sectionsList).map( section => {
          return <CvSection section={section} key={section.getAttribute("xml:id")}/>
        })
      }
    </Accordion>
  )
}

export default CvArticle;