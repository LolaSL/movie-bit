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
    render(<footer);
    const textElement = screen.findAllByTestId("infoText-test");
    expect(textElement).toBeInTheDocument();
  });