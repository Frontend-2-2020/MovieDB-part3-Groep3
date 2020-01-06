import React, { Component } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-dark justify-content-center bgGradient mb-4">
          <a class="navbar-brand" href="http://localhost:3000/">
            <img
              src="../src/images/tmdb_nobg.png"
              width="125"
              height="125"
              alt="logo"
            />
          </a>
        </nav>
      </div>
    );
  }
}

export default App;
