import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import LoginPage from "./LoginPage";

it("should show the text 'Login'", () => {
  render(<LoginPage />);
  expect(screen.getByText("Login")).toBeInTheDocument();
});
