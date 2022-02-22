import React, { useState } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

import registerUser from "api/services/auth";

import * as S from "./SignupForm.styles";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    registerUser(username, email, password, confirmPassword)
      .then(() => {
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography variant="h2" component="h1">
        Signup
      </Typography>
      <S.Form onSubmit={handleSubmit}>
        <TextField
          type="text"
          id="username-input"
          label="username"
          variant="standard"
          required
          inputProps={{ "data-testid": "username", "aria-required": "true" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <TextField
          type="password"
          id="confirm-password-input"
          label="confirm password"
          variant="standard"
          required
          inputProps={{
            "data-testid": "confirm-password",
            "aria-required": "true",
          }}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" sx={{ width: "20%" }}>
          Submit
        </Button>
      </S.Form>
      {error && error}
    </Box>
  );
};

export default SignupForm;
