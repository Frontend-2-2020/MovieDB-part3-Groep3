import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-dark justify-content-center bgGradient mb-4">
        <a className="navbar-brand" href="http://localhost:3000/">
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
