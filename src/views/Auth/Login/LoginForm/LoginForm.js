import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

import * as S from "./LoginForm.styles";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
    </Box>
  );
};

export default LoginForm;
