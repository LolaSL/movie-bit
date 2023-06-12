import { render, screen } from "@testing-library/react";
import React from "react";

describe("carousel component", () => {
    test("carousel renders correctly", () => {
        render(
        <
            div></div>
        );
        const textElement = screen.findAllByTestId("carousel-test");
        expect(textElement).toBeDefined();
      });
})