
import { render, screen, test, expect } from "@testing-library/react"
import About from '../../pages/about/About.jsx'
test('renders About', () => {
    render(<h1 />);
    const linkElement = screen.getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
    //   const aboutElement = screen.getByTestId('about-1');
    //   expect(aboutElement).toBeInTheDocument();
    //   expect(aboutElement).toHaveTextContent('hello')
})