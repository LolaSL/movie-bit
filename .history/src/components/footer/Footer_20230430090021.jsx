
import {
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";
import { SocialIcon } from 'react-social-icons';
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { Route, Routes } from 'react-router-dom';
import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <Routes className="menuItems">
                    <Route  to="/terms-of-use" className="menuItem">Terms Of Use</Route>
                    <Link   to="/node_modulesprivacy-policy" className="menuItem">Privacy-Policy</Link>
                    <Link  to="/about" className="menuItem">About</Link>
                    <Link   to="/blog" className="menuItem">Blog</Link>
                    <Link to="/faq" className="menuItem">FAQ</Link>
                </Routes>
                <div className="infoText">
               Christofer Nolan - Every film should have its own world, a logic and feel to it that expands beyond the exact image that the audience is seeing. 
                </div>
                <div className="socialIcons">
                    <SocialIcon className="icon" url="https://github.com/" style={{ height: 27, width: 27, backgroundColor:"white" }} >
                        <FaGithub />
                    </SocialIcon>
                    <SocialIcon className="icon"  url="https://linkedin.com" style={{ height: 27, width: 27 }} >
                        <FaLinkedin />
                    </SocialIcon>
                    <div>&copy; {new Date().getFullYear()} Copyright: MOVIE BIT</div>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;