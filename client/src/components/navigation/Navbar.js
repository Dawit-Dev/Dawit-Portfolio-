import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1348);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    setIsChecked(!isChecked);
  };

  function screenTest() {
    if (window.innerWidth <= 767) {
      toggleNav();
    }
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      <NavLink to="/">
        <img src="/images/logo.png" alt="logo" className="logo" />
      </NavLink>
      <header className="navbar custom-header navbar-expand-md border-0">
        <div>
          <input
            id="menu__toggle"
            className="menu__toggle"
            type="checkbox"
            checked={isChecked}
            onChange={toggleNav}
          />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          {(toggleMenu || screenWidth > 767) && (
            <nav className="text-center menu__box">
              <ul className="navbar-nav border-0 menu__box__ul">
                <li className="nav-item custom-nav-item">
                  <NavLink
                    to="/"
                    className={`nav-link px-4 border-end-0 text-light fs-4 ${({
                      isActive,
                    }) => (isActive ? "active" : "menu__item")}`}
                    onClick={screenTest}
                  >
                    <span>Home</span>
                  </NavLink>
                </li>
                <li className="nav-item custom-nav-item">
                  <NavLink
                    to="/projects"
                    className={`nav-link px-4 border-end-0 text-light fs-4 ${({
                      isActive,
                    }) => (isActive ? "active" : "menu__item")}`}
                    onClick={screenTest}
                  >
                    <span>Projects</span>
                  </NavLink>
                </li>
                <li className="nav-item custom-nav-item">
                  <NavLink
                    to="/about"
                    className={`nav-link px-4 border-end-0 text-light fs-4 ${({
                      isActive,
                    }) => (isActive ? "active" : "menu__item")}`}
                    onClick={screenTest}
                  >
                    <span>About</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
