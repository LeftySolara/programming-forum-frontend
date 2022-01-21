import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./views/Home/HomePage/HomePage";
import LoginPage from "./views/Auth/Login/LoginPage/LoginPage";
import SignupPage from "./views/Auth/Signup/SignupPage/SignupPage";
import NotFoundPage from "./views/NotFound/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
