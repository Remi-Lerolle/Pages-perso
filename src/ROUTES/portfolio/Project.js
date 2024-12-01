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
			{technoListToBadges(composeTechnoList(data.listOfSection), data.title)}
		</Container>
		<Container className='mt-2'>
			{i18n.t(data.I18nDescriptionId)}
		</Container>
		<Container
			fluid
			className='porfolio-section-img' >
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
				<Container className='clearfix'>
					{sect?.componentList.map((component, index) => (<React.Fragment key={`comp-${index}`}>{component}</React.Fragment>))}
				</Container>
			</React.Fragment  >
		))}
	</>)
}

export function ProjectCard({ data }) {
	return (
		<Col sm>
			<Card className='mt-5'>
				<Card.Header>
					<Card.Title>{data.title}</Card.Title>
				</Card.Header>
				<Card.Img variant="top" src={data.imgUrl} />
				<Card.Body>
					{technoListToBadges(composeTechnoList(data.listOfSection), data.title)}
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

function composeTechnoList(listOfSection) {
	let listOfDistinctTechno = []
	listOfSection.forEach(section => {
		section.technoList.forEach(techno => {
			if (listOfDistinctTechno.indexOf(techno) === -1) {
				listOfDistinctTechno.push(techno)
			}
		})
	});
	return listOfDistinctTechno;
}

function technoListToBadges(technoList, title) {
	return (<p >
		{technoList.map(
			t => {
				return (
					<Badge
						bg="info"
						className="techno-badge"
						key={`${t}-${title}-techno-bagde`}>
						{t}
					</Badge>
				)
			})}
	</p>)
}