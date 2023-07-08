import { render, screen } from "@testing-library/react";
import PrivacyPolicy from "../../pages/privacyPolicy/PrivacyPolicy";

import React from "react";

describe('Privacy Policy', () => {
  
  test("Privacy Policy renders correctly", () => {
  render(<PrivacyPolicy />);
  const textElement = screen.getByText("Privacy Policy");
  expect(textElement).toBeInTheDocument();
});

})

//.only -only this test will run
// .skip -only this test will skip