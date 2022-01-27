import React from "react";

import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

import CreateBoardForm from "./CreateBoardForm";

describe("The form for creating boards", () => {
  it("renders the default state", () => {
    const { getByTestId } = render(<CreateBoardForm />);
    const topic = getByTestId("topic");
    const description = getByTestId("description");
    const category = getByTestId("category");

    expect(topic.value).toBe("");
    expect(description.value).toBe("");
    expect(category.value).toBe("");
  });

  it("allows input in the text fields", () => {
    const { getByTestId } = render(<CreateBoardForm />);
    const topic = getByTestId("topic");

    fireEvent.change(topic, { target: { value: "Topic Name" } });
    expect(topic.value).toBe("Topic Name");
  });
});
