
import PropTypes from "prop-types";
import Carousel from "../../../components/carousel/Carousel.jsx";
import useFetch from "../../../hooks/useFetch.js";

const Similar = ({ mediaType, item}) => {
  const { data, loading } = useFetch(`/${mediaType}/${item.id}/similar`);
  const results = data?.results;

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (

    <Carousel
      title={title}
      data={results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};

Similar.propTypes = {
  data: PropTypes.array,
  mediaType: PropTypes.string,
  id: PropTypes.string,

};

export default Similar;