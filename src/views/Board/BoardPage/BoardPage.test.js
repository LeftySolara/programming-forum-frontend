import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import BoardPage from "./BoardPage";

it("should show the text 'Board Page'", () => {
  render(<BoardPage />);
  expect(screen.getByText("Board Page")).toBeInTheDocument();
});
