import React from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Drone Dispatch
      </Link>
      <div>
        <Link to="/drones" className="navbar-link">
          Drones
        </Link>
        <Link to="/medications" className="navbar-link">
          Medications
        </Link>
        <Link to="/dispatch" className="navbar-link">
          Dispatch
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
