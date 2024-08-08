import {React, useContext, useEffect, useState} from 'react';
import XMLdataFr from "../../XMLDATA/cv-rl-fr.xml";
import XMLdataEn from "../../XMLDATA/cv-rl-en.xml";
import { Container } from 'react-bootstrap';
import CvArticle from './CvArticle';
import {LangContext} from '../../App.js'
import i18n from '../../Translation/i18n.js';

export default function Cv(){
  const lang = useContext(LangContext);
  const [xmlData, setXMLData] = useState(null)
  i18n.changeLanguage(lang)

  useEffect( () => {
    const x = lang === "fr"
      ? XMLdataFr
      : lang === "en"
        ? XMLdataEn
        : null
    
    if ( x ){
      getXML( x )
        .then( response => {
          setXMLData(response);
        },
        response => {
          console.log("case reject") 
          console.log(response) }
      )
    }
  }, [lang])

  return (
    <Container className="cvArticle"><h1>{i18n.t("CV.RL")}</h1>
      { xmlData 
          ? <CvArticle xmlResponse={ xmlData } /> 
          : null}
    </Container>
  )
}

function getXML( XMLdata ) {

  if ( XMLdata ){
    return new Promise((resolve, reject) => {

      const req = new XMLHttpRequest();

      req.open( "GET", XMLdata );
      req.onload = () => {
        if ( req.status >= 200 && req.status < 300){
          resolve( req.responseXML );
        }else{
          reject( req.statusText );
        }
      }
      req.onerror = () => reject(req.statusText);
      req.send();
    })
  }
}