import { render, screen } from "@testing-library/react";
import Footer from "../footer/Footer";

import React from "react";

test("Footer renders correctly", () => {
    render(<Footer />);
    const linktElement = screen.getByText(/Terms Of Use);
    expect(textElement).toBeInTheDocument();
  });