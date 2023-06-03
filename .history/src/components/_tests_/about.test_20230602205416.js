import React from 'react'
import { render, screen } from "@testing-library/react"

test('render Hello World link', () => {
    render(<h1></h1>);
    const linkElement = screen.getByText(/Hello World/i)
    expect(textElement).toBeInTheDocument()
    //   const aboutElement = screen.getByTestId('about-1');
    //   expect(aboutElement).toBeInTheDocument();
    //   expect(aboutElement).toHaveTextContent('hello')
})