import React, { Component } from "react";
import Detail from "./pages/Detail";
import Overzicht from "./pages/Overzicht";
import Page404 from "./pages/Page404";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
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
        <Switch>
          <Route path="/Detail" component={Detail} />
          <Route path="/" exact component={Overzicht} />
          <Route path="/" component={Page404} />
        </Switch>
        <div>
          <h1>Hello to u 2</h1>
        </div>
      </Router>
    );
  }
}

export default App;
