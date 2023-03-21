import React from 'react';
import './App.css';
import './Navbar.css';
import './Boxes.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Airway from './Airway';
import Wound from './Wound';
import Burn from './Burn';
import Immobilizations from './Immobilizations';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<div className="container">
            <div className="box box1">
            <a href="/immobilizations">
                <button className="button1">Immobilizations</button>
              </a>
            </div>
            <div className="box box2">
            <a href="/wound">
                <button className="button2">Wound Management</button>
              </a>
            </div>
            <div className="box box3">
              <a href="/airway">
                <button className="button3">Airway Management</button>
              </a>
            </div>
            <div className="box box4">
            <a href="/burn">
                <button className="button4">Burn Management</button>
              </a>
            </div>
          </div>} />
          <Route path="/immobilizations" element={<Immobilizations />} />
          <Route path="/airway" element={<Airway />} />
          <Route path="/wound" element={<Wound />} />
          <Route path="/burn" element={<Burn />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
