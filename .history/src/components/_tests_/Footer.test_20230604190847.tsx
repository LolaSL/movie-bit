import { render, screen } from "@testing-library/react";
import Footer from "../footer/Footer";

import React from "react";

test("li renders correctly", () => {
    render(<footer><ul><li></li></ul></footer>);
    const linkElement = screen.findAllByTestId("ul-test");
    expect(linkElement).toBeDefined()
  });