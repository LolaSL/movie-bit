import React from 'react';
import { render, screen } from "@testing-library/react";
import Footer from "../footer/Footer";
describe('App', () => {
    test("App renders correctly", () => {
        render(
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        );
        const linkElement = screen.findAllByTestId("ul-test");
        expect(linkElement).toBeDefined();
      });
})