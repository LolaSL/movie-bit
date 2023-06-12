import { render, screen } from "@testing-library/react";
import Footer from "../footer/Footer";

import React from "react";

test("li renders correctly", () => {
    render(<li />);
    const linkElement = screen.get(/Terms Of Use/i);
    expect(linkElement).toBeInTheDocument();
  });