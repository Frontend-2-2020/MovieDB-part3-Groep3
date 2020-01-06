import React, { Component } from "react";
import Detail from "./pages/Detail";
import Overzicht from "./pages/Overzicht";
import Page404 from "./pages/Page404";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        
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
