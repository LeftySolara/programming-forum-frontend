import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import CreateBoardCategoryPage from "./CreateBoardCategoryPage";

it("should show the text 'Home'", () => {
  render(<CreateBoardCategoryPage />);
  expect(screen.getByText(/Create Board Category/i)).toBeInTheDocument();
});
