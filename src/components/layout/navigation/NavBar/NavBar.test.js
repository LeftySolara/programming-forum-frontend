import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import NavBar from "./NavBar";

describe("The navbar should display buttons and a 'logo'", () => {
  it("Should display the app name", () => {
    render(<NavBar />);
    expect(screen.getByText(/SegmentationFault/i)).toBeInTheDocument();
  });

  it("Should display a link to the login page", () => {
    render(<NavBar />);
    // TODO: Check for href once routing is implemented
    // expect(screen.getByText(/Log In/i)).toHaveAttribute("href", "/login");
    expect(screen.getByText(/Log In/)).toBeInTheDocument();
  });

  it("Should display a link to the signup page", () => {
    render(<NavBar />);
    // TODO: Check for href once routing is implemented
    // expect(screen.getByText(/Sign Up/i)).toHaveAttribute("href", "/signup");
    expect(screen.getByText(/Sign Up/)).toBeInTheDocument();
  });
});
