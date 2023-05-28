import "./style.scss";
import noResults from "../../assets/no-results.png";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
                <img className="no-results" src={noResults} alt="No results found" />
        </ContentWrapper>
        </div>
    );
};

export default PageNotFound;