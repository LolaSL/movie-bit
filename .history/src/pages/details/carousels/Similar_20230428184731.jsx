
import PropTypes from "prop-types";
import Carousel from "../../../components/carousel/Carousel.jsx";
import useFetch from "../../../hooks/useFetch";

const Similar = ({ mediaType, id, rating }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);
  const results = data?.results;

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <Carousel
      title={title}
      data={results}
      rating={parseInt(rating)}
      loading={loading}
      endpoint={mediaType}
    />
  );
};

Similar.propTypes = {
  data: PropTypes.object,
  mediaType: PropTypes.string,
  id: PropTypes.string
};

export default Similar;