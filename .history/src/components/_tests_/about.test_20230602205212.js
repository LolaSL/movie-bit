import React from 'react'
import { render, screen } from "@testing-library/react"

test('render Hello, World', () => {
    render(<h1></h1>);
    const textElement = screen.getByText(/Hello, World/)
    expect(textElement)
    //   const aboutElement = screen.getByTestId('about-1');
    //   expect(aboutElement).toBeInTheDocument();
    //   expect(aboutElement).toHaveTextContent('hello')
})