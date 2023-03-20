import React from 'react';
import './App.css';
import './Navbar.css';
import './Boxes.css';
import Navbar from './Navbar';



function App() {
  return (
    <div>
      <Navbar />


      <div className="box box1"><a href="/Users/ethan/Desktop/nepal_project/immobilization.html"><button className="button1">Immobilizations</button></a></div>
      <div className="box box2"><a href="/Users/ethan/Desktop/nepal_project/wound.html"><button className="button2">Wound Management</button></a></div>
      <div className="box box3"><a href="/Users/ethan/Desktop/nepal_project/airway.html"><button className="button3">Airway Management</button></a></div>
      <div className="box box4"><a href="/Users/ethan/Desktop/nepal_project/burn.html"><button className="button4">Burn Management</button></a></div>
    </div>
  );
}

export default App;
