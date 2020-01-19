import React, { Component } from "react";

// Our Navbar with a link on the img to the Homepage
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-dark justify-content-center bgGradient mb-4">
        <a className="navbar-brand" href="/">
          <img
            src="/images/tmdb_nobg.png"
            width="125"
            height="125"
            alt="logo"
          />
        </a>
      </nav>
    );
  }
}

export default Navbar;
