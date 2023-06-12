import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer/PrivacyPolicy";

import React from "react";

test("Privacy Policy renders correctly", () => {
    render(<PrivacyPolicy />);
    const textElement = screen.getByText("Privacy Policy");
    expect(textElement).toBeInTheDocument();
  });