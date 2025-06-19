import { React, useContext } from 'react';
import { Container } from 'react-bootstrap';
import i18n from '../Translation/i18n';
import { LangContext } from '../App.js'
import hexagoneShaped3 from '../IMG/hexagone-shaped-3.svg';


function Home() {
	const lang = useContext(LangContext);
	i18n.changeLanguage(lang);

	return (
		<Container >

			<img src={hexagoneShaped3}
				alt="hexagone"
				style={{
					position: "absolute",
					width: "25%",
					left: "47%",
					top: "10%",
					zIndex: "-1",
				}}
			/>

			<img src={hexagoneShaped3}
				alt="hexagone"
				style={{
					position: "absolute",
					width: "50%",
					left: "0px",
					top: "100px",
					zIndex: "-1",
				}}
			/>


			<img src={hexagoneShaped3}
				alt="hexagone"
				style={{
					position: "absolute",
					width: "35%",
					left: "47%",
					top: "50%",
					zIndex: "-1",
				}}
			/>



			<h1
				style={{
					fontSize: "50pt",
					position: "relative",
					top: "200px"
				}}
			>{i18n.t('RL.personnal.web.pages')}</h1>

		</Container>
	)
}

export default Home;