import React from "react";
import { Link } from "react-router-dom";

function LinkPara(props) {
	const para = props.para;
	const uri = para.querySelector("uri")

	return <p className="paraLink">
		<Link to={uri.innerHTML}>{uri.getAttribute("annotations")}[{uri.innerHTML}]</Link>
	</p>
}

export default LinkPara;