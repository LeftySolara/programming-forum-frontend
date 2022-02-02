import React from "react";

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import LoginForm from "./LoginForm";

describe("The form for logging in", () => {
  it("should show the text 'Login'", () => {
    render(<LoginForm />);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("renders the default state", () => {
    const { getByTestId } = render(<LoginForm />);
    const email = getByTestId("email");
    const password = getByTestId("password");

    expect(email.value).toBe("");
    expect(password.value).toBe("");
  });

  it("allows input in the text fields", () => {
    const exampleEmail = "me@example.com";
    const examplePassword = "mypassword";

    const { getByTestId } = render(<LoginForm />);
    const email = getByTestId("email");
    const password = getByTestId("password");

    fireEvent.change(email, { target: { value: exampleEmail } });
    fireEvent.change(password, { target: { value: examplePassword } });

    expect(email.value).toBe(exampleEmail);
    expect(password.value).toBe(examplePassword);
  });
});
