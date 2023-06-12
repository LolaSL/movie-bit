import React from 'react';
import { render, screen } from "@testing-library/react";


describe('App', () => {
  test("App renders correctly", () => {
    render(<Footer />);
    const componentElement = screen.findByTestId("ul-test");
    expect(componentElement).toBeInTheDocument();
  });
});