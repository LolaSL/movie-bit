import { render, screen } from "@testing-library/react";
import { SocialIcon } from "react-social-icons";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import React from "react";
import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
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

});
  
describe("Nested", () => {
  test("renders correctly", () => {
render(
  <div>
    <SocialIcon></SocialIcon>
    <SocialIcon></SocialIcon>
  </div>
);
const textElement = screen.findAllByTestId("socialIcons-test");
expect(textElement).toBeDefined();
});
})