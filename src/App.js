import './App.css';
import React from 'react';
import { createContext, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Container, Navbar } from 'react-bootstrap';

import Cv from './ROUTES/cv/Cv';
import PortfolioHome from './ROUTES/PortfolioHome';
import Home from './ROUTES/Home';

export const LangContext = createContext(null);

function App() {

  const location = useLocation();

  const [lang, setLangState] = useState("fr");

  function handleClickLang(langValue) {
    setLangState(langValue);
  }

  return (
    <LangContext.Provider value={lang}>
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
