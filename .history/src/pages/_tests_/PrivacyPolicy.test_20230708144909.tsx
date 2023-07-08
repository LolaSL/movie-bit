import { render, screen } from "@testing-library/react";
import PrivacyPolicy from "../../pages/privacyPolicy/PrivacyPolicy";

import React from "react";

describe('Privacy Policy', () => {
  
  test("Privacy Policy renders correctly", () => {
  render(<PrivacyPolicy />);
  const textElement = screen.getByText("Privacy Policy");
  expect(textElement).toBeInTheDocument();
});

test("Privacy Policy renders correctly", () => {
  render(<PrivacyPolicy />);
  const textElement1 = screen.findAllByTestId(
   
  );
  expect(textElement1).toBeInTheDocument();
});
})

//.only -only this test will run
// .skip -only this test will skip