
import { render, screen,  expect } from "@testing-library/react";

import Footer from '../footer/Footer.jsx';

import test from 
test('render terms Of use link', () => {
    render(<Footer/>);
    const linkElement = screen.getByText(/terms Of use/i);
    expect(linkElement).toBeInTheDocument();
  
})