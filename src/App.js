import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBook from "./SearchBook";

class BooksApp extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <SearchBook />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default BooksApp;
