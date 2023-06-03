
import { render, screen, test, expect } from "@testing-library/react";

import Footer from '../../components/footer/Footer.jsx';


test('render Terms Of Use link', () => {
    render(<Footer/>);
    const linkElement = screen.getByText(/terms Of Use/i);
    expect(linkElement).toBeInTheDocument();
  
})