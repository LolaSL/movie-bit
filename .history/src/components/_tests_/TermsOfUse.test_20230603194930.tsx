
import { render, screen} from "@testing-library/react";
import  TermsOfUse  from "../footer/Footer.jsx";

import React from "react";

test('footer renders correctly', () => {
    render(<Footer />)
    screen.getByText("")
})
