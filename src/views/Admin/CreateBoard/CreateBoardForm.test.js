import React from "react";

import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import useAxios from "hooks/useAxios";

import CreateBoardForm from "./CreateBoardForm";

jest.mock("hooks/useAxios");

const mockAxios = () => {
  useAxios.mockImplementation(() => {
    return {
      response: [
        {
          _id: "123",
          topic: "Example",
          boards: ["456"],
        },
      ],
      error: null,
      loading: false,
    };
  });
};

describe("The form for creating boards", () => {
  it("renders the default state", () => {
    mockAxios();

    let topic;
    let description;
    let category;

    act(() => {
      const { getByTestId } = render(<CreateBoardForm />);
      topic = getByTestId("topic");
      description = getByTestId("description");
      category = getByTestId("category");
    });

    expect(topic.value).toBe("");
    expect(description.value).toBe("");
    expect(category.value).toBe("");
  });

  it("allows input in the text fields", () => {
    mockAxios();

    let topic;

    act(() => {
      const { getByTestId } = render(<CreateBoardForm />);
      topic = getByTestId("topic");
    });

    fireEvent.change(topic, { target: { value: "Topic Name" } });
    expect(topic.value).toBe("Topic Name");
  });
});
