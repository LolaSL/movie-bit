
import { render, screen, test, expect } from "@testing-library/react"
import Footer from '../../components/footer/'
test('renders About', () => {
    render(<h1 />);
    const linkElement = screen.getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
    //   const aboutElement = screen.getByTestId('about-1');
    //   expect(aboutElement).toBeInTheDocument();
    //   expect(aboutElement).toHaveTextContent('hello')
})