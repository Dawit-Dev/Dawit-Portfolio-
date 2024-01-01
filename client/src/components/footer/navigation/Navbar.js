import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div>
        <Link className="navbar-brand text-light fw-bold fs-3" to="/">
          My Website
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`}
        id="navbarNav"
      >
        <ul
          className="navbar-nav ml-auto justify-content-end"
          style={{ fontSize: "25px" }}
        >
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/gallery">
              Project
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
