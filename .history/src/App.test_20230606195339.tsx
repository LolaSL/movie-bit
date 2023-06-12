import React from 'react';
import { render, screen } from "@testing-library/react";
import App from './App'

describe('App', () => {
  test("renders correctly", () => {
    render(<App />);
    const nameElement = screen.getByRole('application');
    expect(nameElement).toBeInTheDocument();
  });
});