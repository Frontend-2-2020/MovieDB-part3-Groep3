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
        <Switch>
          <Route path="/Detail" component={Detail} />
          <Route path="/" exact component={Overzicht} />
          <Route path="/" component={Page404} />
        </Switch>

        <div>
          <Overzicht />
        </div>
        <div>
          <Detail />
        </div>
      </Router>
    );
  }
}

export default App;
