import React from "react";
import HistoryItem from "./HistoryItem";
import { Accordion } from "react-bootstrap";

function HistoryList( props ){
  const history = props.history;
  const sectionId = props.sectionId;
  const items = history.querySelectorAll("listitem");

  return (
    <Accordion.Body key={sectionId-"history"} className="history-list" >
      <div className="history-stroke" ></div>
      {
        Array.from( items ).map( ( item, index ) => {
          return <HistoryItem 
            key={`${props.sectionId}-${index}-historyitem`} 
            item={item}
            />
        }
        )
      }
    </Accordion.Body>
    )
}

export default HistoryList;