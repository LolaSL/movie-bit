
import { render, screen} from "@testing-library/react";
import TermsOfUse from "../../pages/terms/TermsOfUse";

import React from "react";

test('Terms Of Use renders correctly', () => {
    render(<TermsOfUse/>)
    screen.getByText("Terms Of Use")
    expext()
})
