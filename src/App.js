import React, { Component } from "react";
import Detail from "./pages/Detail";
import Overzicht from "./pages/Overzicht";
import Page404 from "./pages/Page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./style/App.css";
import Navbar from "./Components/Navbar";

// Building up our App and diving them into smaller components
class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Detail/:MovieDetail" component={Detail} />
          <Route path="/" exact component={Overzicht} />
          <Route path="/" component={Page404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
