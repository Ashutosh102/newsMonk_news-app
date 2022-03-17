import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav my-auto">
            <li className="nav-item active mx-3">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#" className="nav-link">
                General
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#" className="nav-link">
                Business
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#" className="nav-link">
                Entertainment
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#" className="nav-link">
                Sports
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#" className="nav-link">
                Health
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#" className="nav-link">
                Science
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#" className="nav-link">
                Tech
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
