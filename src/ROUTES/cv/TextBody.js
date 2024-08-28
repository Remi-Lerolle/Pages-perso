import React from "react";
import { Accordion, Card } from "react-bootstrap";
import Para from "./Para";

function TextBody(props) {
	const paras = props.listOfParas;
	const title = props.title;
	const id = props.id;

	return (
		<Accordion.Collapse eventKey={id}>
			<Card.Body className="CVcard-body">
				{
					[...paras].map((para, index) => {
						return <Para content={para} key={`${title}-${index}`} />
					})
				}
			</Card.Body>
		</Accordion.Collapse>
	)
}

export default TextBody;