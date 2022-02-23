/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

import AuthContext from "context/auth/auth-context";
import { useHistory } from "react-router-dom";
import { loginUser } from "api/services/auth";

import * as S from "./LoginForm.styles";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();
  const auth = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    loginUser(email, password)
      .then((response) => {
        setEmail("");
        setPassword("");
        setError("");
        auth.login(response.data.userId, response.data.token);
        history.push("/");
      })
      .catch(() => {
        setError("Incorrect email or password. Please try again.");
      });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography variant="h2" component="h1">
        Login
      </Typography>
      <S.Form onSubmit={handleSubmit}>
        <TextField
          type="text"
          id="email-input"
          label="email"
          variant="standard"
          required
          inputProps={{ "data-testid": "email", "aria-required": "true" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          id="password-input"
          label="password"
          variant="standard"
          required
          inputProps={{ "data-testid": "password", "aria-required": "true" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" sx={{ width: "20%" }}>
          Submit
        </Button>
      </S.Form>
      {error && error}
    </Box>
  );
};

export default LoginForm;
