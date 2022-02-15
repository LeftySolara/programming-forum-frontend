import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import PostThreadPage from "./PostThreadPage";

it("should show the text 'Home'", () => {
  render(<PostThreadPage />);
  expect(screen.getByText("Post New Thread")).toBeInTheDocument();
});
