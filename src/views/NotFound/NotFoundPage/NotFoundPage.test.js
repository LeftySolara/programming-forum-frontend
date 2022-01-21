import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import NotFoundPage from "./NotFoundPage";

it("should show the text 'Page Not Found'", () => {
  render(<NotFoundPage />);
  expect(screen.getByText("Page Not Found")).toBeInTheDocument();
});
