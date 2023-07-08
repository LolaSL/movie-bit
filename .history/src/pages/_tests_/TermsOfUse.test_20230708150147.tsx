import { render, screen } from "@testing-library/react";
import TermsOfUse from "../../pages/terms/TermsOfUse";

import React from "react";

describe(" Terms Of Use", () => {
  test("Terms Of Use renders correctly", () => {
    render(<TermsOfUse />);
    const termElement = screen.getByTestId(
    });
    expect(termElement).toBeInTheDocument();
  });
});
