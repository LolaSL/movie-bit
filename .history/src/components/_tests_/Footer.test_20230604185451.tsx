import { render, screen } from "@testing-library/react";
import Footer from "../footer/Footer";

import React from "react";

test("ul renders correctly", () => {
    render(<ul />);
    const linkElement = screen.getByTestId(/Terms Of Use/i);
    expect(linkElement).toBeInTheDocument();
  });