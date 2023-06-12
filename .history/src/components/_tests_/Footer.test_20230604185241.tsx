import { render, screen } from "@testing-library/react";
import Footer from "../footer";

import React from "react";

test("Privacy Policy renders correctly", () => {
    render(<Footer />);
    const textElement = screen.getByText("Privacy Policy");
    expect(textElement).toBeInTheDocument();
  });