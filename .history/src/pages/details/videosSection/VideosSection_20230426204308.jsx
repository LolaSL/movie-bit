import { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper.jsx";
import VideoPopup from "../../../components/videoPopup/VideoPopup.jsx";
import Img from "../../../components/lazyLoadImage/Img.jsx";
import { PlayIcon } from "../Playbtn.jsx";

const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => (
    <div className="skItem">
      <div className="thumb skeleton"></div>
      <div className="row skeleton"></div>
      <div className="row2 skeleton"></div>
    </div>
  );

  return (
    <div className="videosSection">
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {data?.results?.map((video) => (
              <div
                key={video.id}
                className="videoItem"
                onClick={() => {
                  setVideoId(video.key);
                  setShow(true);
                }}
              >
                <div className="videoThumbnail">
                  <Img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} />
                  <PlayIcon />
                </div>
                <div className="videoTitle">{video.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
      <VideoPopup show={show} setShow={setShow} videoId={videoId} setVideoId={setVideoId} />
    </div>
  );
};

VideosSection.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    )
  }),
  loading: PropTypes.bool.isRequired
};

export default VideosSection;