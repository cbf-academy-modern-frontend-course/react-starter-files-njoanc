import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";

import App from "./App";

test("renders button", () => {
  render(<App />);
  screen.debug;

  const button = screen.getByText(/Click to Reveal/i);
  expect(button).toBeInTheDocument();
});

test("renders without crashing", () => {
  act(() => {
    const root = ReactDOM.createRoot(document.createElement("div"));
    root.render(<App />);
    screen.debug;
  });
});
