import {React, useContext} from 'react';
import XMLdataFr from "../../XMLDATA/cv-rl-fr.xml";
import XMLdataEn from "../../XMLDATA/cv-rl-en.xml";
import CvArticle from './CvArticle';
import {LangContext} from '../../App.js'


export default function Cv(){
  const lang = useContext(LangContext);
  console.log(LangContext)
  console.log(lang)

  const prom = getXML( lang === "fr"  
                          ? XMLdataFr
                          : lang === "en"
                            ? XMLdataEn
                            : null  ).then(
    xmlResponse => {
      return (<>
        <p>lang</p>
      <CvArticle xmlResponse={ xmlResponse } />
      </>
    )
    },
    responseStatusText => {
      console.log(responseStatusText);
    }
  )

  

  // return(
  //   <>
  //   <p>{lang}</p>
  //   <CvArticle xmlResponse={ this.state.xmlResponse } />
  //   </>
  // )
}


// function CvFromXML(XML){

  
//   render (){
//       return(<CvArticle xmlResponse={ this.state.xmlResponse } />)
//     } 
// //   }

function getXML( XMLdata ) {
  console.log("in getXML ")
  console.log("XMLdata")
  console.log(XMLdata)

  return new Promise((resolve, reject) => {

    const req = new XMLHttpRequest();

    req.open( "GET", XMLdataFr );
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