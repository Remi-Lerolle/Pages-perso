import './App.css';
import React from 'react';
import { createContext, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Container, Navbar, NavDropdown } from 'react-bootstrap';

import i18n from './Translation/i18n';
import Cv from './ROUTES/cv/Cv';
import PortfolioHome from './ROUTES/PortfolioHome';
import Home from './ROUTES/Home';
import Formalizz from './ROUTES/portfolio/Formalizz';

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
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <Link to="/portfolio-home" className="list" >
                Portfolio
              </Link>
              <NavDropdown.Item href="#action/3.1">
              </NavDropdown.Item>
                <Link to="/portfolio/Formalizz" className="list" >
                  Formalizz
                </Link>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>

          <ButtonGroup className='mb-2 me-5'>
            <Button
              variant={lang === "fr" ? "primary" : "secondary"}
              onClick={() =>handleClickLang("fr")}>fr</Button>
            <Button
              variant={lang === "en" ? "primary" : "secondary"}
              onClick={() => handleClickLang("en")} >en</Button>
          </ButtonGroup>
        </Navbar>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cv" element={<Cv/>} />
          <Route path="/portfolio-home" element={<PortfolioHome />} />
          <Route path="/portfolio/Formalizz" element={<Formalizz />} />
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
