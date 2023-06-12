import { render, screen } from "@testing-library/react";
import { SocialIcon } from "react-social-icons";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Footer from "../footer/Footer";

describe
describe("footer", () => {
  test("list renders correctly", () => {
    render(
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    );
    const linkElement = screen.findAllByTestId("ul-test");
    expect(linkElement).toBeDefined();
  });

  test("paragraph renders correctly", () => {
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
        <SocialIcon>
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon>
          <FaGithub />
        </SocialIcon>
      </div>
    );
    const textElement = screen.findAllByTestId("socialIcons-test");
    expect(textElement).toBeDefined();
  });

  test("year renders correctly", () => {
    const currentYear = new Date().getFullYear();
    render(<div>&copy; {currentYear} Copyright: MOVIE BIT</div>);
    const copyrightElement = screen.findByTestId("copyright-test");
    expect(copyrightElement).toBeDefined();
  });

  test("year renders correctly", () => {
    render(<div>&copy; {new Date().getFullYear()} Copyright: MOVIE BIT</div>);
    global.Date = Date;
    const textElement = screen.findByDisplayValue("2023");
    expect(textElement).toBeDefined();
  });
});

describe("Footer", () => {
  test("Footer renders correctly", () => {
    render(
      <footer>
        <ContentWrapper>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div>
            <p></p>
          </div>
          <div>
            <SocialIcon>
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon>
              <FaGithub />
            </SocialIcon>
          </div>
          <div></div>
        </ContentWrapper>
      </footer>
    );
    const textElement = screen.findByTestId("footer-test");
    expect(textElement).toBeDefined();
  });
});
