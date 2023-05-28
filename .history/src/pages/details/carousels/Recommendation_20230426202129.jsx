import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/recommendations`);
  const results = data?.results;

  return (
    <Carousel
      title="Recommendations"
      data={results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};

export default Recommendation;