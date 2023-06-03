

test('should render about component', () => {
  render("Hello, World");
  const aboutElement = screen.getByTestId('about-1');
  expect(aboutElement).toBeInTheDocument();
  expect(aboutElement).toHaveTextContent('hello')
})