import PropTypes from "prop-types";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
  const { response, loading } = useFetch(`/${mediaType}/${id}/recommendations`);
  const results = response?.results;

  return (
    <Carousel
      key=""
      title="Recommendations"
      response={results}
      loading={loading}
      endpoint={`${mediaType}/${id}/recommendations`}
    />
  );
};

Recommendation.propTypes = {
  mediaType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  response: PropTypes.object,
};

export default Recommendation;