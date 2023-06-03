
import { render, screen, test, expect } from "@testing-library/react"
import About from '../../pages/about/'
test('renders Hello World link', () => {
    render(<h1 />);
    const linkElement = screen.getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument();
    //   const aboutElement = screen.getByTestId('about-1');
    //   expect(aboutElement).toBeInTheDocument();
    //   expect(aboutElement).toHaveTextContent('hello')
})