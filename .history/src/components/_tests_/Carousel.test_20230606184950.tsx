import { render, screen } from "@testing-library/react";
import React from "react";

describe("carousel component", () => {
    test("carousel renders correctly", () => {
        render(
        \
        );
        const linkElement = screen.findAllByTestId("ul-test");
        expect(linkElement).toBeDefined();
      });
})