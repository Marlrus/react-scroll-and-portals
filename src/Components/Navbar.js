import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-scroll';

const Navbar = ({ sections, closeModal }) => {
  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <img src={logo} className="nav-logo" alt="Logo" onClick={closeModal} />
        <ul className="nav-items">
          {sections.map((section) => (
            <li className="nav-item">
              <Link
                activeClass="active"
                containerId="portal-container"
                to={section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {section.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
