import React from "react";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "@src/App/App";

test("test", () => {
  render(<App />);
  debugger;
  expect(screen.queryByText("Hello App!")).toBeInTheDocument();
});
