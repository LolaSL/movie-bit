import { render, screen } from "@testing-library/react";
import TermsOfUse from "../../pages/terms/TermsOfUse";

import React from "react";

describe(" Terms Of Use", () => {
  test(" Terms Of Use renders correctly", () => {
    render(<TermsOfUse />);
    const textElement = screen.findAllByAltText("Terms Of Use");
    expect(textElement).toBeInTheDocument();
  });

});
