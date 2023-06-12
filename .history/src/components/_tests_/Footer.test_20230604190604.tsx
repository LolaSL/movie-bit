import { render, screen } from "@testing-library/react";
import Footer from "../footer/Footer";

import React from "react";

test("li renders correctly", () => {
    render(<ul><li ></li></ul>);
    const linkElement = screen.("ul-test");
    expect(linkElement).toBeInTheDocument();
  });