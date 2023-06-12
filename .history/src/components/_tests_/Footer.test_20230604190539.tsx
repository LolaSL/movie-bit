import { render, screen } from "@testing-library/react";
import Footer from "../footer/Footer";

import React from "react";

test("li renders correctly", () => {
    render(<ul><li ></ul>);
    const linkElement = screen.getAllByTitle("ul-test");
    expect(linkElement).toBeInTheDocument();
  });