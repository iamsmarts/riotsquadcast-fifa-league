import React from "react";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  { name: "Home", link: "/", exact: true },
  { name: "Add Result", link: "/add-match", exact: false }
];

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Riot Squad Cast FIFA19</Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        {navLinks.map((link, index) => (
          <li key={index} className="nav-item">
            <NavLink className="nav-link" to={link.link} exact={link.exact}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Header;
