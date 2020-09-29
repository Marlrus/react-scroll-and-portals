import React from 'react';
import logo from '../logo.svg';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <img src={logo} className="nav-logo" alt="Logo" onClick={scrollToTop} />
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass="active"
              containerId="portal-container"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 1
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              containerId="portal-container"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 2
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              containerId="portal-container"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 3
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              containerId="portal-container"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 4
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              containerId="portal-container"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 5
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;