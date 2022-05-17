import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
describe("App", () => {
  it("should render App component", () => {
    render(<App />);

    const countButton = screen.getByRole("button", { name: /count is/i });
    expect(countButton).toBeInTheDocument();

    const appHeader = screen.getByRole("banner");
    expect(appHeader).toHaveClass("App-header");
  });
});
