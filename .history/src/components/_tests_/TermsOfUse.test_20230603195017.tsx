
import { render, screen} from "@testing-library/react";
import TermsOfUse from "../../pages/terms/TermsOfUse";

import React from "react";

test('footer renders correctly', () => {
    render(<TermsOfUse/>)
    screen.getByText("Terms Of Use")
})
