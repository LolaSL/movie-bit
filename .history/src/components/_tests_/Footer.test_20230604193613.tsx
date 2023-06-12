import { render, screen } from "@testing-library/react";
import Footer from "../footer/Footer";
import { SocialIcon } from 'react-social-icons';
import React from "react";

describe('footer', ())
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

test("footer renders correctly", () => {
  render(
    <div>
      <p></p>
    </div>
  );
  const textElement = screen.findAllByTestId("infoText-test");
  expect(textElement).toBeDefined();
});

test("footer  renders correctly", () => {
    render(
      <div>
        <SocialIcon></SocialIcon>
        <SocialIcon ></SocialIcon>
      </div>
    );
    const textElement = screen.findAllByTestId("socialIcons-test");
    expect(textElement).toBeDefined();
  });
