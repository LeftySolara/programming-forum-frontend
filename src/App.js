import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material";

import AuthContext from "context/auth/auth-context";

import BoardPage from "views/Board/BoardPage/BoardPage";
import ThreadPage from "views/Thread/ThreadPage/ThreadPage";
import PostThreadPage from "views/Board/PostThreadPage/PostThreadPage";
import HomePage from "./views/Home/HomePage/HomePage";
import LoginPage from "./views/Auth/Login/LoginPage/LoginPage";
import SignupPage from "./views/Auth/Signup/SignupPage/SignupPage";
import NotFoundPage from "./views/NotFound/NotFoundPage/NotFoundPage";
import CreateBoardPage from "./views/Admin/CreateBoard/CreateBoardPage";
import CreateBoardCategoryPage from "./views/Admin/CreateBoardCategory/CreateBoardCategoryPage";

import theme from "./context/theme/theme";
import NavBar from "./components/layout/navigation/NavBar/NavBar";

const App = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);

  const login = useCallback((uid, utoken, uname) => {
    setToken(utoken);
    setUserId(uid);
    setUsername(uname);
    localStorage.setItem(
      "userData",
      JSON.stringify({ userId: uid, token: utoken, username: uname }),
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setUsername(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token) {
      login(storedData.userID, storedData.token, storedData.username);
    }
  }, [login]);

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/board/:id/post-thread" component={PostThreadPage} />
        <Route path="/board/:id" component={BoardPage} />
        <Route path="/thread/:id" component={ThreadPage} />
        <Route
          path="/admin/boardCategory/create"
          component={CreateBoardCategoryPage}
        />
        <Route path="/admin/board/create" component={CreateBoardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/board/:id" component={BoardPage} />
        <Route path="/thread/:id" component={ThreadPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: !!token, token, userId, username, login, logout }}
    >
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <NavBar />
          {routes}
        </ThemeProvider>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
