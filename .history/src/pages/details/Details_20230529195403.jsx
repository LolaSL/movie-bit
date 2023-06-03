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
  const { data: videosData, loading: videosLoading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: creditsData, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);

  const video = videosData?.results?.[0];
  const crew = creditsData?.crew;
  const castData = creditsData?.cast;

  return (
    <div>
      <DetailsBanner video={video} crew={crew} />
      <Cast data={castData} loading={creditsLoading} />
      <VideosSection data={videosData} loading={videosLoading} />
      <Similar mediaType={mediaType} id={id} key={ key}/>
      <Recommendation mediaType={mediaType} id={id} key={ key}/>
    </div>
  );
};

export default Details;
