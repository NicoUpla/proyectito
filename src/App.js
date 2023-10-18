import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import React, { useState } from 'react';
import SprintSurvey from './SprintSurvey';
import Resumen from './Resumen';

const App = () => {

  return (
    
    <div>
      <Router>
      <div>
        <Routes>
          <Route path="/Satisfaccion" element={<SprintSurvey />} />
          <Route path="/Resumen" element={<Resumen />} />
          <Route path="/" element={<HomePage />} />
          {/* Otras rutas aquí */}
        </Routes>
      </div>
    </Router>
    </div>
  );
};





export default App;


