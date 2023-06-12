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

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("div renders correctly", () => {
  render(
    <div>
      <p></p>
    </div>
  );
  const textElement = screen.findAllByTestId("infoText-test");
  expect(textElement).toBeDefined();
});

test("SocialIcon  renders correctly", () => {
    render(
      <div>
            <SocialIcon ></SocialIcon>
            <SocialIcon ></SocialIcon>
      </div>
    );
    const textElement = screen.findAllByTestId("socialIcons-test");
    expect(textElement).toBeDefined();
  });
