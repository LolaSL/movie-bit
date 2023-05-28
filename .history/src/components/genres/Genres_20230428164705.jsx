
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import "./style.scss";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="genres">
      {data?.map((g) => {
        const genreName = genres[g]?.name;
        if (genreName) {
          return (
            <div key={g} className="genre">
              {genreName}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

Genres.propTypes = {
  data: PropTypes.ob,
};

export default Genres;