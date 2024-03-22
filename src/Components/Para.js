import React from "react";

function Para( props ){

  const text = props.content.innerHTML;
  const index = props.index;
  return <p >{text}</p>
}

export default Para;