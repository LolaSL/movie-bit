import { render, screen } from "@testing-library/react";
import Footer from "../footer/Footer";

import React from "react";

test("Link renders correctly", () => {
    render(<Link />);
    const linkElement = screen.getByTestId(/Terms Of Use/i);
    expect(linkElement).toBeInTheDocument();
  });