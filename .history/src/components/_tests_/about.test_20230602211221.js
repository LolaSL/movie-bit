
import { render, screen,  expect } from "@testing-library/react";

import Footer from '../footer/Footer.jsx';


// eslint-disable-next-line no-undef
test('render terms Of use link', () => {
    render(<Footer/>);
    const linkElement = screen.getByText(/terms Of use/i);
    expect(linkElement).toBeInTheDocument();
  
})