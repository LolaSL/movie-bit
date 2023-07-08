import { render, screen } from "@testing-library/react";
import About from "../../pages/Abou/PrivacyPolicy";

import React from "react";

describe('Privacy Policy', () => {
  
  test("Privacy Policy renders correctly", () => {
  render(<PrivacyPolicy />);
  const textElement = screen.getByText("Privacy Policy");
  expect(textElement).toBeInTheDocument();
  });
  test("Terms Of Use renders correctly", () => {
    render(<PrivacyPolicy />);
    const policyElement = screen.getByTestId("privacy-policy-test");
    expect(policyElement).toBeInTheDocument();
  });

})