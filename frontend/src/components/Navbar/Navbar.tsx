import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Router>
        <div className="nav-item">
          <Link to="/pong">Pong</Link>
        </div>
        <div className="nav-item">
          <Link to="/profile">Profile</Link>
        </div>
        <div className="nav-item">
          <Link to="/intro">Intro</Link>
        </div>
        <div className="nav-item">
          <Link to="/channels">Channels</Link>
        </div>
        <div className="nav-item">
          <Link to="/contacts">Contacts</Link>
        </div>
        <div className="nav-item">
          <Link to="/signout">Sign out</Link>
        </div>
      </Router>
    </div>
  );
}

export default Navbar;
