import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { Link } from "react-router-dom";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer" data-testid="footer-test">
      <ContentWrapper>
        <ul className="menuItems" data-testid="ul-test">
          <Link to="/terms-of-use" className="menuItem">
            Terms Of Use
          </Link>
          <Link to="/privacy-policy" className="menuItem">
            Privacy-Policy
          </Link>
          <Link to="/about" className="menuItem">
            About
          </Link>
        </ul>
        <div className="infoText" data-testid="infoText-test">
          <p>
            Christofer Nolan - Every film should have its own world, a logic and
            feel to it that expands beyond the exact image that the audience is
            seeing.
          </p>
        </div>
        <div className="socialIcons" data-testid="socialIcons-test">
          <SocialIcon
            className="icon"
            url="https://github.com/"
            style={{ height: 27, width: 27, backgroundColor: "white" }}
          >
            <FaGithub />
          </SocialIcon>
          <SocialIcon
            className="icon"
            url="https://linkedin.com"
            style={{ height: 27, width: 27 }}
          >
            <FaLinkedin />
          </SocialIcon>
          <div data-test="copyright-test" className="copyright">
            &copy; {new Date().getFullYear()} Copyright: MOVIE BIT
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
