import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import CreateBoardPage from "./CreateBoardPage";

it("should show the text 'Create Board'", () => {
  render(<CreateBoardPage />);
  expect(screen.getByText(/Create Board/i)).toBeInTheDocument();
});
