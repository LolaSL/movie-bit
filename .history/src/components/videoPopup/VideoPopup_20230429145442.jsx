import PropTypes from "prop-types";
import ReactPlayer from "react-player/youtube";
import "./style.scss";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <div className={`videoPopup ${show ? "visible" : ""}`}>
      <div className="opacityLayer" onClick={hidePopup}></div>
      <div className="videoPlayer">
        <span className="closeBtn" onClick={hidePopup}>
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          origin={window.location.origin}
        />
      </div>
    </div>
  );
};

VideoPopup.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  videoId: PropTypes.string,
  setVideoId: PropTypes.func,
};

export default VideoPopup;