import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Project";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "./Footer";

const Router = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <BrowserRouter>
      <div className="main-container">
        <div className="bracket">
          <div className="horizontal-bar"></div>
          <div className="vertical-bar"></div>
        </div>
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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div className="right-bottom-bracket">
          <div className="bottom-vertical-bar"></div>
          <div className="bottom-horizontal-bar"></div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
