import { render, screen } from "@testing-library/react";
import Footer from "../footer/Footer";

import React from "react";

test("footer renders correctly", () => {
  render(
    <footer>
      <ul>
        <li></li>
      </ul>
      <li></li>
      <li></li>
    </footer>
  );
  const linkElement = screen.findAllByTestId("ul-test");
  expect(linkElement).toBeDefined();
});

test("Privacy Policy renders correctly", () => {
    render(<footer><div></div></footer>);
    const textElement = screen.getByText(" Christofer Nolan - Every film should have its own world, a logic and feel to it that expands beyond the exact image that the audience is seeing. ");
    expect(textElement).toBeInTheDocument();
  });