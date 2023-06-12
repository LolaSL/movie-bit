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
    render(<PrivacyPolicy />);
    const textElement = screen.getByText("Privacy Policy");
    expect(textElement).toBeInTheDocument();
  });