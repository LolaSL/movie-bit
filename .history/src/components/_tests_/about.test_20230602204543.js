import {  render } from "jest"

test('render Hello ', () => {
    render(<h1>Hello, World</h1>);
    //   const aboutElement = screen.getByTestId('about-1');
    //   expect(aboutElement).toBeInTheDocument();
    //   expect(aboutElement).toHaveTextContent('hello')
})