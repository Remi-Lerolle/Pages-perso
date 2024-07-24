import React from 'react';
import XMLdata from "../../XMLDATA/cv-rl-fr.xml";
import CvArticle from './CvArticle';

class Cv extends React.Component{
  state = {};

  prom = getXML().then(
    xmlResponse => {
      this.setState( {xmlResponse} )
    },
    responseStatusText => {
      console.err(responseStatusText);
    }
    )
    render (){
      return(<CvArticle xmlResponse={ this.state.xmlResponse } />)
    } 
  }

function getXML() {
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

export default Cv;