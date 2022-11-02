import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

it("checks for email inputs", () => {
  render(<Login email="Email" password="password" />);
  const text = screen.getByDisplayValue("Email");
  expect(text).toBeInTheDocument();
});

it("checks for password inputs", () => {
  render(<Login email="Email" password="password" />);
  const text = screen.getByDisplayValue("password");
  expect(text).toBeInTheDocument();
});

it("checks for submit button", () => {
  render(<Login email="Email" password="password" />);
  const text = screen.getByRole("button");
  expect(text).toHaveTextContent("Submit");
});
