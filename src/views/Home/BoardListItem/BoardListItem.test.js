import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import BoardListItem from "./BoardListItem";

describe("The board list item", () => {
  it("should display the provided topic and description", () => {
    const topicString = "Example";
    const descriptionString = "This is a test";

    render(
      <BoardListItem
        id="123"
        topic={topicString}
        description={descriptionString}
      />,
    );

    const topic = screen.getByText(topicString);
    const description = screen.getByText(descriptionString);

    expect(topic).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
