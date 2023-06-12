import React from 'react';
import { render, screen } from "@testing-library/react";
import Footer from "../footer/Footer";
describe('App', () => {
    test("App renders correctly", () => {
        render(
        <Footer/>></Footer>>
        );
        const linkElement = screen.findAllByTestId("ul-test");
        expect(linkElement).toBeDefined();
      });
})