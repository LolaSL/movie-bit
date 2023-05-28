import PropTypes from "prop-types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./style.scss";

const CircleRating = ({ rating }) => {
  const getColor = () => {
    if (rating < 5) {
      return "red";
    } else if (rating < 7) {
      return "orange";
    } else {
      return "green";
    }
  };

  return (
    <div className="circleRating">
      <CircularProgressbar
        value={parseInt(rating)}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: getColor(),
        })}
      />
    </div>
  );
};

CircleRating.propTypes = {
  rating: PropTypes.number,
};

export default CircleRating;
