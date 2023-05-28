import "./style.scss";
import noResults from "../../assets/no-results.png";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
                import noResults from "../../assets/no-results.png";
        </ContentWrapper>
        </div>
    );
};

export default PageNotFound;