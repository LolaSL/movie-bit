import { render, screen } from "@testing-library/react";
import { SocialIcon } from "react-social-icons";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import React from "react";
import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import Footer from "../footer/Footer";

describe("footer", () => {
  test("footer renders correctly", () => {
    render(
      <footer>
        <ContentWrapper>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul></ContentWrapper>
      </footer>
    );
    const linkElement = screen.findAllByTestId("ul-test");
    expect(linkElement).toBeDefined();
  });

  test("footer renders correctly", () => {
    render(
      <div>
        <p></p>
      </div>
    );
    const textElement = screen.findAllByTestId("infoText-test");
    expect(textElement).toBeDefined();
  });

  test("renders correctly", () => {
    render(
      <div>
        <SocialIcon><FaLinkedin/></SocialIcon>
        <SocialIcon><FaGithub/></SocialIcon>
      </div>
    );
    const textElement = screen.findAllByTestId("socialIcons-test");
    expect(textElement).toBeDefined();
    });

});
  
describe("Footer", () => {
  test("Footer renders correctly", () => {
    render(<Footer />); 
const textElement = screen.findAllByTestId("footer-test");
expect(textElement).toBeDefined();
});
})