
import { render, screen} from "@testing-library/react";
import  TermsOfUse  from "../../;

import React from "react";

test('footer renders correctly', () => {
    render(<TermsOfUse/>)
    screen.getByText("")
})
