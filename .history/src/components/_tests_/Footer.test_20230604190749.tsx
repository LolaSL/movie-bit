import { render, screen } from "@testing-library/react";
import Footer from "../footer/Footer";

import React from "react";

test("li renders correctly", () => {w
    render(
        <ul><li></li></ul>);
    const linkElement = screen.findAllByTestId("ul-test");
    expect(linkElement).toBeDefined()
  });