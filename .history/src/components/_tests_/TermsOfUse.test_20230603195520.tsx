
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
    const textElement1 = screen.getByText("Terms Of Use")
    expect(textElement).toBeInTheDocument()
})
