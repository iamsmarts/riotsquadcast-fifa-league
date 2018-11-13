import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Header extends Component {
  state = {
    navLinks: [
      { name: "Home", link: "/", exact: true },
      { name: "Add Result", link: "/add-match", exact: false }
    ],
    isCollapsed: true
  };
  handleNavClick = () =>{
    this.setState( prevState => ({
      isCollapsed: !prevState.isCollapsed
    }))
  }
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Riot Squad Cast FIFA19
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.handleNavClick}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end
          ${!this.state.isCollapsed ? "show" : ""}
          `}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {this.state.navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <NavLink className="nav-link" to={link.link} exact={link.exact} onClick={this.handleNavClick}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
