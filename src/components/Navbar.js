import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav className='news-nav'>
          <div className="logo">Newsmonk</div>
          <div className="rest">
            <ul>
              <li><a href="#">Home</a></li>
              
              <li><a href="#">About</a></li>
            </ul>
          </div>

      </nav>
    );
  }
}

export default Navbar;
