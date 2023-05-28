
import PropTypes from "prop-types";
import "./style.scss";

const Spinner = ({ initial }) => {
  const spinnerClassName = `loadingSpinner ${initial ? "initial" : ""}`;
  return (
    <div className={spinnerClassName}>
      <svg className="spinner" viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
      </svg>
    </div>
  );
};

Spinner.propTypes = {
  initial: PropTypes.boo
};

export default Spinner;