import { render, screen } from "@testing-library/react";
import About from "../../pages/about/About";

import React from "react";

describe('Privacy Policy', () => {
  
  test("About renders correctly", () => {
  render(<About />);
  const textElement = screen.getByText("About");
  expect(textElement).toBeInTheDocument();
  });
  test("About component renders correctly", () => {
    render(<About/>);
    const aboutElement = screen.getByTestId("privacy-policy-test");
    expect(aboutElement).toBeInTheDocument();
  });

})