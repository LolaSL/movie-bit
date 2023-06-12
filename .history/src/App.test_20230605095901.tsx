import React from 'react';
import { render, screen } from "@testing-library/react";
import Footer from "./";
describe('App', () => {
    test("App renders correctly", () => {
        render(
        <Footer/>
        );
        const linkElement = screen.findAllByTestId("ul-test");
        expect(linkElement).toBeDefined();
      });
})