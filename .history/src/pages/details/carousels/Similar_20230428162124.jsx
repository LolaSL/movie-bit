
import PropTypes from "prop-types";
import Carousel from "../../../components/carousel/Carousel.jsx";
import useFetch from "../../../hooks/useFetch";

const Similar = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);
  const results = data?.results;

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <Carousel
      key={id}
      title={title}
      data={results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};

Similar.propTypes = {
  data: PropTypes.object,
  mediaType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Similar;