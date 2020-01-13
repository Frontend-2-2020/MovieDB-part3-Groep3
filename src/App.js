import React, { Component } from "react";
import Detail from "./pages/Detail";
import Overzicht from "./pages/Overzicht";
import Page404 from "./pages/Page404";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/">
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
        </Link>

        <Switch>
          <Route path="/Detail" component={Detail} />
          <Route path="/" exact component={Overzicht} />
          <Route path="/" component={Page404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
