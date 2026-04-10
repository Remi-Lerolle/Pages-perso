import { React, useContext } from 'react';
import { Container } from 'react-bootstrap';
import i18n from '../Translation/i18n';
import { LangContext } from '../App.js'
import grenouille from '../IMG/grenouille.jpg'

function Home() {
	const lang = useContext(LangContext);
	i18n.changeLanguage(lang);

	return <>

		<Container 
			fluid
			className="ps-0 pe-0" >

			<Container>

				<h1 className="home-h1">

					<span className="home-h1__span--big1">Pages perso</span><br/>

					<span className="home-h1__span--small">de </span>

					<span className="home-h1__span--big2">Rémi Lerolle</span>

				</h1>

				{/* 
						TO DO: 
						Translate page perso
				*/}

				{/*i18n.t('RL.personnal.web.pages')*/}

			</Container>

			{/* Translate alt image grenouille */}

			<img
				style={{ width: '100%'}}
				src={grenouille}
				alt='grenouille'
		 />

		</Container>

		<Container>

			<h2>{i18n.t('Portfolio')}</h2>

			<h2>{i18n.t('Resume')}</h2>

		</Container>
	</>
}

export default Home;