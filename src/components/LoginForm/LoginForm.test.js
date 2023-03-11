/**
 * This Source Code Edited By Aoun Alazzam
 */

import LoginForm, { validateForm } from ".";
import { render, screen } from "@testing-library/react";

test("renders sign in page", () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

test("is valid inputs", () => {
  expect(
    validateForm({
      email: "rixoho8862@rolenot.com",
      password: "HelloWorld@#585634",
    })
  ).toMatchObject({
    isValidEmail: true,
    isValidPassword: true,
  });
});
