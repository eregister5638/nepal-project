import React from 'react';


function Navbar() {
    return (
      <nav className="navbar">
        {/* LOGO */}
        <div className="logo">Skills</div>
        {/* NAVIGATION MENU */}
        <ul className="nav-links">
          {/* USING CHECKBOX HACK */}
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" className="hamburger">&#9776;</label>
          {/* NAVIGATION MENUS */}
          <div className="menu">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
          </div>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  