import React from "react";

import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

import renderWithRouter from "./utils/testing/render";

import App from "./App";

describe("Routes should be rendered properly", () => {
  it("Login Page", () => {
    renderWithRouter(<App />, { route: "/login" });
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  it("Sign Up Page", () => {
    renderWithRouter(<App />, { route: "/signup" });
    expect(screen.getByText(/Signup/i)).toBeInTheDocument();
  });

  it("Not Found Page", () => {
    renderWithRouter(<App />, { route: "/badroute" });
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });
});
