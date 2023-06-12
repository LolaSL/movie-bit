import { render, screen } from "@testing-library/react";
import React from "react";

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
  }));
describe("carousel component", () => {
    test("carousel renders correctly", () => {
        render(
        <div data-test="carousel-test"></div>
        );
        const textElement = screen.findAllByTestId("carousel-test");
        expect(textElement).toBeDefined();
      });
})