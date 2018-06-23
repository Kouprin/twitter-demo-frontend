import React, { Component } from "react";
import Helmet from "react-helmet";
import { Redirect, BrowserRouter, Switch, Route } from "react-router-dom";

import { Header } from "./Header";
import { Cover } from "./Cover";
import { Statistics } from "./Statistics";
import { LeftColumn } from "./LeftColumn";
import { Middle } from "./Middle";
import { RightColumn } from "./RightColumn";
import "./App.css";

function Page(props) {
  return (
    <div className="Page">
      <Header />
      <Cover />
      <Statistics />
      <LeftColumn />
      <Middle />
      <RightColumn />
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="Desktop">
        <Helmet title="EveryInteract page" />
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/EveryInteract" />
            <Route exact path="/EveryInteract" component={Page} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
