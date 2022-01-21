import React from "react";

import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

import renderWithRouter from "./utils/testing/render";

import App from "./App";

describe("Routes should be rendered properly", () => {
  it("Login Page", () => {
    renderWithRouter(<App />, { route: "/login" });
    expect(screen.getByRole("heading")).toHaveTextContent(/Login/i);
  });

  it("Sign Up Page", () => {
    renderWithRouter(<App />, { route: "/signup" });
    expect(screen.getByRole("heading")).toHaveTextContent(/signup/i);
  });

  it("Not Found Page", () => {
    renderWithRouter(<App />, { route: "/badroute" });
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });
});
