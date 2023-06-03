
import { render, screen,  expect } from "@testing-library/react"
import Footer from '../../components/footer/Footer.jsx'
test('render Terms Of Use', () => {
    render(<Footer/>);
    const textElement = screen.getByText(/Terms Of Use/i);
    expect(textElement).toBeInTheDocument();
  
})