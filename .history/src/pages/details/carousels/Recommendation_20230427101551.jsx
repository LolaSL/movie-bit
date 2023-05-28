import PropTypes from "prop-types";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
  const { response, loading } = useFetch(`/${mediaType}/${id}/recommendations`);
  const results = data?.results;

  return (
    <Carousel
      title="Recommendations"
      data={results}
      loading={loading}
      endpoint={`${mediaType}/${id}/recommendations`}
    />
  );
};

Recommendation.propTypes = {
  mediaType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default Recommendation;
