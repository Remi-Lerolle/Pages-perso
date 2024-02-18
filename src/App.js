import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Cv from './ROUTES/Cv';
import Portfolio from './ROUTES/Portfolio';
import Home from './Home';

function App() {
  return (
    <div className='container'>
      <nav>
        <ul>    
          <Link to="/cv" className="list" >
            Curriculum Vitae
          </Link>    
          <Link to="/portfolio" className="list" >
            Portfolio
          </Link>    
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={ <Home /> }/>  
        <Route path="/cv" element={ <Cv /> }/>  
        <Route path="/portfolio" element={ <Portfolio /> }/>      
      </Routes>

    </div>

    );
}

export default App;
