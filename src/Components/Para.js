import React from "react";

function Para( props ){

  console.log("Para:");
  console.log(props.content);

  const text = props.content.innerHTML;
  const index = props.index;
  return <p >{text}</p>
}

export default Para;