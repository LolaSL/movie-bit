
import { render, screen} from "@testing-library/react";
import TermsOfUse from "../../pages/terms/TermsOfUse";

import React from "react";

test('Terms Of Use renders correctly', () => {
    render(<TermsOfUse/>)
    const textElement = screen.getByText("Terms Of Use")
    expect(textElement).toBeInTheDocument()
})

test('Terms Of Use renders correctly', () => {
    render(<TermsOfUse/>)
    const textElement1 = screen.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, massa et laoreet ornare, augue nibh molestie tortor, ac varius dolor nisl sit amet orci. Duis condimentum magna tempor dui commodo cursus. Aenean et mollis mi. In nec volutpat leo. Cras est velit, commodo ut ex eu, varius eleifend odio. Sed ut convallis ex. Nunc nec lacinia lacus. Sed elit quam, consectetur et ultricies sit amet, bibendum sed lectus. Mauris in tortor in turpis imperdiet molestie. Vivamus feugiat neque at consectetur interdum.")
    expect(textElement).toBeInTheDocument()
})
