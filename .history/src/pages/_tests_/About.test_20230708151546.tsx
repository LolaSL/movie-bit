import { render, screen } from "@testing-library/react";
import About from "../../pages/about/About";

import React from "react";

describe('Privacy Policy', () => {
  
  test("About renders correctly", () => {
  render(<About />);
  const textElement = screen.getByText("About");
  expect(textElement).toBeInTheDocument();
  });
  test("A renders correctly", () => {
    render(<About/>);
    const policyElement = screen.getByTestId("privacy-policy-test");
    expect(policyElement).toBeInTheDocument();
  });

})