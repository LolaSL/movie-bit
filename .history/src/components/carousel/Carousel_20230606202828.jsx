import { useRef } from "react";
import PropTypes from "prop-types";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../contentWrapper/ContentWrapper.jsx";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating.jsx";
import Genres from "../genres/Genres.jsx";
import "./style.scss";
import React from "react";

class CarouselErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    // You can log the error or send it to an error tracking service
    console.error(error);
    console.error(errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // Custom error message or fallback UI can be rendered here
      return <div>Oops! Something went wrong.</div>;
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children || null;
  }
}

const Carousel = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <CarouselErrorBoundary>
      <div className="carousel" data-test="carousel-test">
        <ContentWrapper>
          {title && <div className="carouselTitle">{title}</div>}
          <BsFillArrowLeftCircleFill
            className="carouselLeftNav arrow"
            onClick={() => navigation("left")}
          />
          <BsFillArrowRightCircleFill
            className="carouselRighttNav arrow"
            onClick={() => navigation("right")}
          />
          {!loading ? (
            <div className="carouselItems" ref={carouselContainer}>
              {data &&
                data?.map((item) => {
                  const posterUrl = item.poster_path
                    ? url.poster + item.poster_path
                    : PosterFallback;
                  return (
                    <div
                      key={item.id}
                      className="carouselItem"
                      onClick={() =>
                        navigate(`/${item.media_type || endpoint}/${item.id}`)
                      }
                    >
                      <div className="posterBlock">
                        <Img src={posterUrl} />
                        <CircleRating
                          rating={parseInt(item.vote_average.toFixed(1))}
                        />
                        <Genres data={item.genre_ids.slice(0, 2)} />
                      </div>
                      <div className="textBlock">
                        <span className="title">{item.title || item.name}</span>
                        <span className="date">
                          {dayjs(
                            item.release_date || item.first_air_date
                          ).format("MMM D, YYYY")}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="loadingSkeleton">
              {Array.from({ length: 5 }).map(skItem)}
            </div>
          )}
        </ContentWrapper>
      </div>
    </CarouselErrorBoundary>
  );
};

Carousel.propTypes = {
  children: PropTypes.node,
  data: PropTypes.array,
  loading: PropTypes.bool,
  endpoint: PropTypes.string,
  title: PropTypes.string,
};
export default Carousel;
