import { useParams } from "react-router-dom";
import "./style.scss";
import useFetch from "../../hooks/useFetch.js";
import DetailsBanner from "./detailsBanner/DetailsBanner.jsx";
import Cast from "./cast/Cast.jsx";
import VideosSection from "./videosSection/VideosSection.jsx";
import Similar from "./carousels/Similar.jsx";
import Recommendation from "./carousels/Recommendation.jsx";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
const video = vide
  // const video = data?.results?.[0];
  const crew = credits?.crew;
  const castData = credits?.cast;

  return (
    <div>
      <DetailsBanner video={video.key} crew={crew} />
      <Cast data={castData} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
