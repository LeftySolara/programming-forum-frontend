import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material";

import theme from "./context/theme/theme";

import NavBar from "./components/layout/navigation/NavBar/NavBar";

import HomePage from "./views/Home/HomePage/HomePage";
import LoginPage from "./views/Auth/Login/LoginPage/LoginPage";
import SignupPage from "./views/Auth/Signup/SignupPage/SignupPage";
import NotFoundPage from "./views/NotFound/NotFoundPage/NotFoundPage";
import CreateBoardCategoryPage from "./views/Admin/CreateBoardCategory/CreateBoardCategoryPage";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route
            path="/admin/boardCategory/create"
            component={CreateBoardCategoryPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
