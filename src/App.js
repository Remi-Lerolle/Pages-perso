import './App.css';
import React from 'react';
import { createContext, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Container, Navbar, Dropdown } from 'react-bootstrap';

import i18n from './Translation/i18n';
import Cv from './ROUTES/cv/Cv';
import PortfolioHome from './ROUTES/PortfolioHome';
import Home from './ROUTES/Home';
import Formalizz from './ROUTES/portfolio/Formalizz';
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

            <Dropdown as={ButtonGroup} >
              <Button className='bg-transparent border-0 App-link'>
                <Link 
                  to="/portfolio-home" 
                  className='App-link'
                  style={{"color": "#5e3501"}} 
                  >
                  Portfolio
                </Link>
              </Button>

              <Dropdown.Toggle
                className="bg-transparent border-0 App-link"

                style={{"color": "#5e3501"}} 
                id="dropdown-split-basic" />

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Link to="/portfolio/Formalizz" className="list" >
                    Formalizz
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Link to="/portfolio/PortfolioCV" className="list" >
                    CV
                  </Link>
                </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>

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
