import React from "react";

import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import renderWithRouter from "../../../../utils/testing/render";

import App from "../../../../App";

describe("The navbar should display links and a 'logo'", () => {
  it("Should display the app name", () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/SegmentationFault/i)).toBeInTheDocument();
  });

  it("Should render the app title as a link to the home page", () => {
    renderWithRouter(<App />, { route: "/login" });

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/SegmentationFault/i), leftClick);

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  it("Should display a functioning link to the login page", () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/Log In/i)).toBeInTheDocument();

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/Log In/i), leftClick);

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  it("Should display a functioning link to the signup page", () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/Sign Up/i), leftClick);

    expect(screen.getByText(/Signup/i)).toBeInTheDocument();
  });
});
