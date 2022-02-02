import React from "react";

import "@testing-library/jest-dom";
import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import renderWithRouter from "utils/testing/render";

import useAxios from "hooks/useAxios";

import App from "App";
import NavBar from "./NavBar";

jest.mock("hooks/useAxios");

const mockAxios = () =>
  useAxios.mockImplementation(() => {
    return {
      response: [
        { _id: "1", topic: "hello" },
        { _id: "2", topic: "world" },
      ],
      error: null,
      loading: false,
    };
  });

describe("The navbar should display links and a 'logo'", () => {
  it("Should display the app name", () => {
    renderWithRouter(<NavBar />);

    expect(screen.getByText(/SegmentationFault/i)).toBeInTheDocument();
  });

  it("Should render the app title as a link to the home page", () => {
    mockAxios();

    act(() => {
      renderWithRouter(<App />, { route: "/login" });
    });

    const leftClick = { button: 0 };
    act(() => {
      userEvent.click(screen.getByText(/SegmentationFault/i), leftClick);
    });

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  it("Should display a functioning link to the login page", () => {
    mockAxios();

    act(() => {
      renderWithRouter(<App />);
    });
    expect(screen.getByText(/Log In/i)).toBeInTheDocument();

    const leftClick = { button: 0 };
    act(() => {
      userEvent.click(screen.getByText(/Log In/i), leftClick);
    });

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  it("Should display a functioning link to the signup page", () => {
    mockAxios();

    act(() => {
      renderWithRouter(<App />);
    });
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();

    const leftClick = { button: 0 };
    act(() => {
      userEvent.click(screen.getByText(/Sign Up/i), leftClick);
    });

    expect(screen.getByText(/Signup/i)).toBeInTheDocument();
  });
});
