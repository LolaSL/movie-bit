import { render, screen } from "@testing-library/react";
import Footer from "../footer/Footer";

import React from "react";

test("Footer renders correctly", () => {
    render(<ul />);
    const linkElement = screen.getByText(/Terms Of Use/i);
    expect(linkElement).toBeInTheDocument();
  });