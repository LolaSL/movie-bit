
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
               Christofer Nolan - Every film should have its own world, a logic and feel to it that expands beyond the exact image that the audience is seeing. 
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaGithub />
                    </span>
                    
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                    <div>&copy; {new Date().getFullYear()} Copyright: MOVIE BIT</div>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;