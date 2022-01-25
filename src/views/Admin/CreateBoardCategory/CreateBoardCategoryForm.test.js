import React from "react";

import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

import CreateBoardCategoryForm from "./CreateBoardCategoryForm";

describe("The form for creating board categories", () => {
  it("renders the default state", () => {
    const { getByTestId } = render(<CreateBoardCategoryForm />);
    const topic = getByTestId("topic");

    expect(topic.value).toBe("");
  });

  it("allows input in the text field", () => {
    const { getByTestId } = render(<CreateBoardCategoryForm />);
    const topic = getByTestId("topic");

    fireEvent.change(topic, { target: { value: "Topic Name" } });
    expect(topic.value).toBe("Topic Name");
  });

  it("should call handleSubmit() when submitted", () => {
    const handleSubmit = jest
      .fn()
      .mockImplementation((cb) => () => cb({ test: "test" }));
    const { getByTestId } = render(
      <CreateBoardCategoryForm onSubmit={handleSubmit} />,
    );
    const form = getByTestId("create-category-form");

    fireEvent.submit(form);
    expect(handleSubmit).toBeCalledTimes(1);
  });
});
