import { React, useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import i18n from '../Translation/i18n';
import { LangContext } from '../App.js'
import grenouille from '../IMG/grenouille.jpg'

function Home() {
	const lang = useContext(LangContext);
	i18n.changeLanguage(lang);

	return <>
		<Container >
			<Row>
				<h1>{i18n.t('RL.personnal.web.pages')}</h1>
			</Row>
		</Container>

		<Container 
			fluid
			className="ps-0 pe-0" >

			<img
				style={{ width: '100%'}}
				src={grenouille} />
		</Container>

		<Container>		
			<h2>{i18n.t('Portfolio')}</h2>
			<h2>{i18n.t('Resume')}</h2>
		</Container>
	</>
}

export default Home;