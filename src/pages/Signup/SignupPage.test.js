import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import SignupPage from "./SignupPage";

it("should show the text 'Signup'", () => {
  render(<SignupPage />);
  expect(screen.getByText("Signup")).toBeInTheDocument();
});
