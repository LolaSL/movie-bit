import React from 'react';
import { render, screen } from "@testing-library/react";
import  Footer from "./components/footer/Footer";


describe('App', () => {
  test("App renders correctly", () => {
    render(
      <Footer />
    );
    const componentE = screen.findAllByTestId("ul-test");
    expect(linkElement).toBeDefined();
  });
});