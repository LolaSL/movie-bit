import { useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs.jsx";
import useFetch from "../../../hooks/useFetch.js";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading, index } = useFetch(`/trending/movie/${endpoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  
  return (
    <div className="carouselSection" key={index}>
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel  data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  );
};

export default Trending;