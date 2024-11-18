import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/karthikeyakatragadda/crowdfundingApp/crowdfunding-app/src/Navbar.css';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Crowdfunding</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-15 px-3">
              <Link className="nav-link" to="/">Home  </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" to="/campaigns">Campaigns   </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" to="/about">About Us   </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" to="/contact">Contact   </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" to="/login">Login   </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;  