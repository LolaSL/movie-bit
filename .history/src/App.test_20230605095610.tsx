import React from 'react';
import { render, screen } from "@testing-library/react";
describe('App', () => {
    test("list renders correctly", () => {
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