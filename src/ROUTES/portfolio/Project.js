import React, { useContext } from 'react';
import { Badge, Button, Card, Col, Container, Stack, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import i18n from '../../Translation/i18n';
import { LangContext } from '../../App.js'
import "./project.css"

export function Project({ data }) {
	const lang = useContext(LangContext);
	i18n.changeLanguage(lang);

	return (<>
		<Container>
			<h1>{data.title}</h1>
		</Container>
		<Container>
			{ /*
  		TO DO:
  		technoList should come from section list 
			and each badge should have a link to the section(s) it comes from
			*/}
			{technoListToBadges(data.technoList, data.title)}
		</Container>
		<Container className='mt-2'>
			{i18n.t(data.I18nDescriptionId)}
		</Container>
		{ /*
			TO DO:
			define a second background for the exerg image
		*/}
		<Container
			fluid
			className='text-center mt-2'
			style={{ backgroundColor: "darkgoldenrod" }}>
			<Image src={data.imgUrl} className='project-img__exerg' />
		</Container>
		{data.listOfSection.map(sect => (
			<React.Fragment key={`section-${sect.title}`}>
				<Container className="mt-5">
					<h2>{i18n.t(sect.title)}</h2>
				</Container>
				<Container>
					<p>{i18n.t(sect.i18nTextId)}</p>
				</Container>
				<Container className='text-center'>
					<Image src={sect.imgUrl} width="50%" />
				</Container>
			</React.Fragment  >
		))}
	</>)
}


/*
	TO DO:
	List of techno overflow the card on mobile
*/
export function ProjectCard({ data }) {
	return (
		<Col sm>
			<Card className='mt-5'>
				<Card.Header>
					<Card.Title>{data.title}</Card.Title>
				</Card.Header>
				<Card.Img variant="top" src={data.imgUrl} />
				<Card.Body>
					{technoListToBadges(data.technoList, data.title)}
					<Button className="bg-info border-0 mt-2">
						<Link
							className='text-white text-decoration-none'
							to={data.projectPath}
						>
							{data.title}
						</Link>
					</Button>
				</Card.Body>
			</Card>
		</Col >
	)
}

function technoListToBadges(technoList, title) {
	return (<Stack direction="horizontal" gap={2}>
		{technoList.map(
			t => {
				return (
					<React.Fragment key={`${t}-${title}-techno-bagde`}>
						<Badge bg="info" className="mr-2">{t}</Badge>
					</React.Fragment>
				)
			})}
	</Stack>)
}