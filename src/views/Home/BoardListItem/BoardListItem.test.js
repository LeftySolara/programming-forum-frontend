import React from "react";

import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import renderWithRouter from "utils/testing/render";

import BoardListItem from "./BoardListItem";

describe("The board list item", () => {
  it("should display the provided topic and description", () => {
    const topicString = "Example";
    const descriptionString = "This is a test";

    renderWithRouter(
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
