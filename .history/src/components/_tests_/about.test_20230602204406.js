import {test, render} from "jest"

test('should render text', () => {
  render(<h1>Hello, World</h1>);
//   const aboutElement = screen.getByTestId('about-1');
//   expect(aboutElement).toBeInTheDocument();
//   expect(aboutElement).toHaveTextContent('hello')
})