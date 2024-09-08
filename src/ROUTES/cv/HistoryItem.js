import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import DatePara from './DatePara';
import EntitledPara from './EntitledPara';
import EstablishmentPara from './EstablishmentPara';
import DescriptionPara from './DescriptionPara';
import LinkPara from './LinkPara';
import Container from 'react-bootstrap/Container';

function HistoryItem(props) {
	const listOfParas = props.item.querySelectorAll("simpara:not([role='date'])");
	const datePara = props.item.querySelector("simpara[role='date']");

	return (
		<Container>
			<Row className='history-item'>
				<Col className='g-0' md={2}>
					<DatePara datePara={datePara} />
				</Col>
				<Col xs={10} md={10} className='g-0'>
					{
						Array.from(listOfParas).map((para, index) => {
							switch (para.getAttribute("role")) {
								case "entitled":
									return <EntitledPara entitled={para} key={`historyItem-${index}`} />
								case "establishment":
									return <EstablishmentPara establishment={para} key={`historyItem-${index}`} />
								case "description":
									return <DescriptionPara description={para} key={`historyItem-${index}`} />
								case "link":
									return <LinkPara para={para} key={`historyItem-${index}`} />
								default:
									return <div key={`empty${index}`}></div>
							}
						})
					}
				</Col>
			</Row>
		</Container>
	)

}

export default HistoryItem;