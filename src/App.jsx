import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Proyecto from './pages/Proyectos';
import 'normalize.css';


function App() {

  
  return (
    <Router>
    <div>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/proyectos" element={<Proyecto />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
