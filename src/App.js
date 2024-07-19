import './App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Cv from './ROUTES/fr/cv/Cv';
import PortfolioHome from './ROUTES/fr/portfolio/PortfolioHome';
import Home from './ROUTES/fr/Home';

function App() {
  return (
    <div className='container-fluid g-0'>
      <nav>
        <ul>    
          <Link to="/home" className="list" >
            Home
          </Link>    
          <Link to="/cv" className="list" >
            Curriculum Vitae
          </Link>    
          <Link to="/portfolio-home" className="list" >
            Portfolio
          </Link>    
        </ul>
      </nav>


      <Routes>
        <Route path="/home" element={ <Home /> }/>  
        <Route path="/cv" element={ <Cv /> }/>  
        <Route path="/portfolio-home" element={ <PortfolioHome /> }/>      
      </Routes>

    </div>

    );
}

export default App;
