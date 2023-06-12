import { render, screen } from "@testing-library/react";
import Footer from "../footer/Footer";
import { SocialIcon } from 'react-social-icons';
import React from "react";

test("footer renders correctly", () => {
  render(
    <footer>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </footer>
  );
  const linkElement = screen.findAllByTestId("ul-test");
  expect(linkElement).toBeDefined();
});

test("div renders correctly", () => {
  render(
    <div>
      <p></p>
    </div>
  );
  const textElement = screen.findAllByTestId("infoText-test");
  expect(textElement).toBeDefined();
});

test(" SocialIcon } from 'react-social-icons'; renders correctly", () => {
    render(
      <div>
        <p></p>
      </div>
    );
    const textElement = screen.findAllByTestId("infoText-test");
    expect(textElement).toBeDefined();
  });
