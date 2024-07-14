import React from "react";

function Para( props ){

  const text = props.content.innerHTML;
  return <p >{text}</p>
}

export default Para;