import { useParams } from "react-router-dom";
import "./style.scss";
import PropTypes  from "pro";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);

  const video = data?.results?.[0];
  const crew = credits?.crew;
  const castData = credits?.cast;

  return (
    <div>
      <DetailsBanner video={video} crew={crew} />
      <Cast data={castData} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};
Details.propTypes = {
 video: PropTypes.func.isRequired,

};
export default Details;