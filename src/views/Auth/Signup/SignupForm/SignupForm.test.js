import React from "react";

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import SignupForm from "./SignupForm";

describe("The form for signing up", () => {
  it("should show the text 'Signup'", () => {
    render(<SignupForm />);
    expect(screen.getByText("Signup")).toBeInTheDocument();
  });

  it("renders the default state", () => {
    const { getByTestId } = render(<SignupForm />);
    const username = getByTestId("username");
    const email = getByTestId("email");
    const password = getByTestId("password");
    const confirmPassword = getByTestId("confirm-password");

    expect(username.value).toBe("");
    expect(email.value).toBe("");
    expect(password.value).toBe("");
    expect(confirmPassword.value).toBe("");
  });

  it("allows input in the text fields", () => {
    const exampleEmail = "me@example.com";
    const examplePassword = "mypassword";

    const { getByTestId } = render(<SignupForm />);
    const email = getByTestId("email");
    const password = getByTestId("password");

    fireEvent.change(email, { target: { value: exampleEmail } });
    fireEvent.change(password, { target: { value: examplePassword } });

    expect(email.value).toBe(exampleEmail);
    expect(password.value).toBe(examplePassword);
  });
});
