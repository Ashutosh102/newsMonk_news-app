import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <a className="navbar-brand mx-auto" href="#">
          NewsMonk
        </a>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item active ">
            <a className="nav-link" href="#">
              Home <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
