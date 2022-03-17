import React, { Component } from "react";
import{FaHome,FaInfo} from "react-icons/fa";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand " href="#">
         <span className="logo h1">Newsmonk</span> 
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
          <ul className="navbar-nav sp-font h5">
            <li className="nav-item active mx-2">
       
            <a className="nav-link " href="#">
                <FaHome/>
              </a>
             
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                <FaInfo/>
              </a>
            </li>
            <li className="nav-item mx-2">
              <a href="#" className="nav-link">
                General
              </a>
            </li>
            <li className="nav-item mx-2">
              <a href="#" className="nav-link">
                Business
              </a>
            </li>
            <li className="nav-item mx-2">
              <a href="#" className="nav-link">
                Entertainment
              </a>
            </li>
            <li className="nav-item mx-2">
              <a href="#" className="nav-link">
                Sports
              </a>
            </li>
            <li className="nav-item mx-2">
              <a href="#" className="nav-link">
                Health
              </a>
            </li>
            <li className="nav-item mx-2">
              <a href="#" className="nav-link">
                Science
              </a>
            </li>
            <li className="nav-item mx-2">
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
