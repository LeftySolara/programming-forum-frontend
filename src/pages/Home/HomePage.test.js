import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import HomePage from "./HomePage";

it("should show the text 'Home'", () => {
  render(<HomePage />);
  expect(screen.getByText("Home")).toBeInTheDocument();
});
