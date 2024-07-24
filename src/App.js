import './App.css';
import React from 'react';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Container, Navbar } from 'react-bootstrap';

import Cv from './ROUTES/cv/Cv';
import PortfolioHome from './ROUTES/PortfolioHome';
import Home from './ROUTES/Home';

function App() {

	const [langState, setLangState] = useState("fr");

	function handleClickLang( lang ){
		setLangState(lang); 
	}

	return (
		<Container fluid className='p-0'>
			<Navbar>
				<Navbar.Collapse id="basic-navbar-nav">
					<Link to="/home" className="list" >
						Home
					</Link>
					<Link to="/cv" className="list" >
						Curriculum Vitae
					</Link>
					<Link to="/portfolio-home" className="list" >
						Portfolio
					</Link>
				</Navbar.Collapse>

				<ButtonGroup className='mb-2 me-5'>
					<Button 
						variant={ langState === "fr" ? "primary" : "secondary" }
						onClick={() => handleClickLang("fr")}>fr</Button>
					<Button 
						variant={ langState === "en" ? "primary" : "secondary" }
						onClick={ () => handleClickLang("en") } >en</Button>
				</ButtonGroup>
			</Navbar>

			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/cv/" element={<Cv />} />
				<Route path="/portfolio-home" element={<PortfolioHome/>} />
			</Routes>

		</Container>

	);
}


export default App;
