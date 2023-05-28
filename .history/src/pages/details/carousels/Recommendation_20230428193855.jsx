import PropTypes from "prop-types";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/recommendations`);
  const results = response?.results;

  return (
    <Carousel
      title="Recommendations"
      response={results}
      loading={loading}
      endpoint={`${mediaType}/${id}/recommendations`}
    />
  );
};

Recommendation.propTypes = {
  mediaType: PropTypes.string,
  id: PropTypes.string,
  response: PropTypes.array,
};

export default Recommendation;
