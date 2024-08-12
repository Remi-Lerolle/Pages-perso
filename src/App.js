import './App.css';
import React from 'react';
import { createContext, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Container, Navbar, NavDropdown } from 'react-bootstrap';

import i18n from './Translation/i18n';
import Cv from './ROUTES/cv/Cv';
import PortfolioHome from './ROUTES/portfolio/PortfolioHome';
import Home from './ROUTES/Home';
import {Formalizz} from './ROUTES/portfolio/Formalizz';
import PortfolioCV from './ROUTES/portfolio/PortfolioCV';

export const LangContext = createContext(null);

function App() {

  const location = useLocation();

  const [lang, setLangState] = useState("fr");
  i18n.changeLanguage(lang)

  function handleClickLang(langValue) {
    setLangState(langValue);
  }

  return (
    <LangContext.Provider value={lang}>
      <Container fluid className='p-0'>
        <Navbar>
          <Navbar.Collapse id="basic-navbar-nav">
            <Link to="/home" className="list" >
              {i18n.t('Home')}
            </Link>
            <Link to="/cv" className="list" >
              {i18n.t('Resume')}
            </Link>

            <NavDropdown 
              title="Portfolio"
              className='navBar-dropdown'>
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
            </NavDropdown>

          </Navbar.Collapse>

          <ButtonGroup className='mb-2 me-5'>
            <Button
              variant={lang === "fr" ? "primary" : "secondary"}
              onClick={() => handleClickLang("fr")}>fr</Button>
            <Button
              variant={lang === "en" ? "primary" : "secondary"}
              onClick={() => handleClickLang("en")} >en</Button>
          </ButtonGroup>
        </Navbar>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/portfolio-home" element={<PortfolioHome />} />
          <Route path="/portfolio/Formalizz" element={<Formalizz />} />
          <Route path="/portfolio/PortfolioCV" element={<PortfolioCV />} />
        </Routes>

      </Container>

      {location.pathname === "/CV-V2"
        ? <Home />
        : ""
      }
    </LangContext.Provider>
  );
}

export default App;
