import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import BoardList from "./BoardList";

describe("The board list", () => {
  it("should display the topic and description of each board", () => {
    const boards = [
      { _id: "1", topic: "First", description: "The first board" },
      { _id: "2", topic: "Second", description: "The second board" },
    ];

    render(<BoardList boards={boards} />);

    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("The first board")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
    expect(screen.getByText("The second board")).toBeInTheDocument();
  });
});
