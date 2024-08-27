import './App.css';
import React from 'react';
import { createContext, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import i18n from './Translation/i18n';
import Cv from './ROUTES/cv/Cv';
import PortfolioHome from './ROUTES/portfolio/PortfolioHome';
import Home from './ROUTES/Home';
import { Formalizz } from './ROUTES/portfolio/Formalizz';
import PortfolioCV from './ROUTES/portfolio/PortfolioCV';
import StudioXSL from './ROUTES/portfolio/StudioXSL';

export const LangContext = createContext(null);

function App() {

	const location = useLocation();

	const [lang, setLangState] = useState("fr");
	i18n.changeLanguage(lang)

	function handleClickLang(langValue) {
		setLangState(langValue);
	}

	/*
			TO DO:
			[MOBILE]: menu should close on click
	*/

	return (
		<LangContext.Provider value={lang}>

			<Navbar expand="lg">

				<Container>
					<Navbar.Toggle />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav>
							<Link to="/home" className="list" >
								{i18n.t('Home')}
							</Link>
							<Link to="/cv" className="list" >
								{i18n.t('Resume')}
							</Link>

							<NavDropdown
								title="Portfolio"
								className='navBar-dropdown'
								style={{ paddingTop: "0.5rem", paddingLeft: "1rem" }}>
								<NavDropdown.Item
									as={Link}
									className='App-link'
									to="/portfolio-home">
									Portfolio Home
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item
									as={Link}
									className='App-link'
									to="/portfolio/PortfolioCV">
									PortfolioCV
								</NavDropdown.Item>
								<NavDropdown.Item
									className='App-link'
									as={Link}
									to="/portfolio/Formalizz">
									Formalizz
								</NavDropdown.Item>
								<NavDropdown.Item
									className='App-link'
									as={Link}
									to="/portfolio/StudioXSL">
									Studio XSL
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>

					<ButtonGroup className='mb-2 me-5 me-2'>
						<Button
							variant={lang === "fr" ? "primary" : "secondary"}
							onClick={() => handleClickLang("fr")}>fr</Button>
						<Button
							variant={lang === "en" ? "primary" : "secondary"}
							onClick={() => handleClickLang("en")} >en</Button>
					</ButtonGroup>

				</Container>
			</Navbar>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/cv" element={<Cv />} />
				<Route path="/portfolio-home" element={<PortfolioHome />} />
				<Route path="/portfolio/Formalizz" element={<Formalizz />} />
				<Route path="/portfolio/PortfolioCV" element={<PortfolioCV />} />
				<Route path="/portfolio/StudioXSL" element={<StudioXSL />} />
			</Routes>
			{location.pathname === "/CV-V2/index.html"
				? <Home />
				: null}
		</LangContext.Provider >
	);
}

export default App;
