
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./style.scss";
import Img from "../lazyLoadImage/Img";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import PosterFallback from "../../assets/no-poster.png";

const MovieCard = ({ data, fromSearch, mediaType, rating }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const posterUrl = data.poster_path ? url.poster + data.poster_path : PosterFallback;
  
  const handleCardClick = () => {
    navigate(`/${data.media_type || mediaType}/${data.id}`);
  };
  
  return (
    <div className="movieCard" onClick={handleCardClick}>
      <div className="posterBlock">
        <Img className="posterImg" src={posterUrl} />
        {!fromSearch && (
          <>
            <CircleRating rating={data.vote_average.toFixed(1)} />
            <Genres data={data.genre_ids.slice(0, 2)} />
          </>
        )}
      </div>
      <div className="textBlock">
        <span className="title">{data.title || data.name}</span>
        <span className="date">{dayjs(data.release_date).format("MMM D, YYYY")}</span>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
    data: PropTypes.shape({
      poster_path: PropTypes.string,
      media_type: PropTypes.string,
      id: PropTypes.number,
      vote_average: PropTypes.number,
      genre_ids: PropTypes.arrayOf(PropTypes.number),
      title: PropTypes.string,
      name: PropTypes.string,
      release_date: PropTypes.string,
      
    }),
    fromSearch: PropTypes.bool,
    mediaType: PropTypes.string
  };
export default MovieCard;