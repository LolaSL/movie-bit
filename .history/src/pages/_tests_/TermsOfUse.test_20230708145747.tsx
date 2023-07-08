import { render, screen } from "@testing-library/react";
import TermsOfUse from "../../pages/terms/TermsOfUse";

import React from "react";

describe(" Terms Of Use", () => {
  test("Terms Of Use renders correctly", () => {
    render(<TermsOfUse />);
    const textElement = screen.getByText((content, element) => {
      // Add your custom matching logic here
      // For example, you can check if the content includes "Terms Of Use"
      return content.includes("Terms Of Use");
    });
    expect(textElement).toBeInTheDocument();
  });w

});
