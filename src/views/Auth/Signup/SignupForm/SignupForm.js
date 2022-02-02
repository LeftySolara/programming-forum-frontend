import React from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

const SignupForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Typography variant="h2" component="h1">
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          id="username-input"
          label="username"
          variant="standard"
          required
          inputProps={{ "data-testid": "username", "aria-required": "true" }}
        />
        <TextField
          type="text"
          id="email-input"
          label="email"
          variant="standard"
          required
          inputProps={{ "data-testid": "email", "aria-required": "true" }}
        />
        <TextField
          type="password"
          id="password-input"
          label="password"
          variant="standard"
          required
          inputProps={{ "data-testid": "password", "aria-required": "true" }}
        />
        <TextField
          type="password"
          id="confirm-password-input"
          label="confirm-password"
          variant="standard"
          required
          inputProps={{
            "data-testid": "confirm-password",
            "aria-required": "true",
          }}
        />
        <Button type="submit" variant="contained" sx={{ width: "20%" }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default SignupForm;
