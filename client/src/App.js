import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import E404 from "./pages/Error";
import "./App.css";

// npm install

// "react"
// "react-dom"
// "react-router-dom"
// "react-scripts"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/main" component={Main} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={E404} />
      </Switch>
    </Router>
  );
}
export default App;
