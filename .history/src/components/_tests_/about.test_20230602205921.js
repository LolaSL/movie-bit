
import { render, screen, test, expect } from "@testing-library/react"
import Footer from '../../components/footer/Footer.jsx'
test('renders Terms Of Use', () => {
    render(<Footer/>);
    const textElement = screen.getByText(/Terms Of Use/i);
    expect(textElement).toBeInTheDocument();
    //   const aboutElement = screen.getByTestId('about-1');
    //   expect(aboutElement).toBeInTheDocument();
    //   expect(aboutElement).toHaveTextContent('hello')
})