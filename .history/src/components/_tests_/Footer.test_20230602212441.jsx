
import { render, screen } from "@testing-library/react";
import Footer from "../footer/Footer.jsx";
import '@testing-library/jest-dom';
import React


test("should render about link", () => {
  render(<Footer/>);
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
