import React from 'react';
import XMLdata from "../XMLDATA/5daf8adb-72c4-4443-9c35-4aa8c501dfde-1700037495.xml";
import CvArticle from '../Components/CvArticle';

class Cv extends React.Component{
  state = {};

  prom = getXML().then(
    xmlResponse => {
      this.setState( {xmlResponse} )
      console.log( "xml received" );
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