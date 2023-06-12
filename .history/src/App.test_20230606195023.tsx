import React from 'react';
import { render, screen } from "@testing-library/react";
import App from './App'

describe('App', () => {
  test("App renders correctly", () => {
    render(<App />);
    const nameElement = screen.getByRole('');
    expect(nameElement).toBeInTheDocument();
  });
});