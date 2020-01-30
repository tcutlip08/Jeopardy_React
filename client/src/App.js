import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import BO2 from "./pages/BO2/BO2";
import E404 from "./pages/Error";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/black-ops-2" component={BO2} />
        <Route path="*" component={E404} />
      </Switch>
    </Router>
  );
}
export default App;
