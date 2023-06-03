import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../components/lazyLoadImage/Img.jsx";
import "./style.scss";

const About = () => {
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");
  const [background, setBackground] = useState(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    return bg;
  });

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 13)]?.backdrop_path;
    setBackground(bg);
  }, [data, url.backdrop]);
  return (
    <div className="heroBanner" data-testid="about-1">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <div>
        <h1 data-testid="about-1">About</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          aliquet, massa et laoreet ornare, augue nibh molestie tortor, ac
          varius dolor nisl sit amet orci. Duis condimentum magna tempor dui
          commodo cursus. Aenean et mollis mi. In nec volutpat leo. Cras est
          velit, commodo ut ex eu, varius eleifend odio. Sed ut convallis ex.
          Nunc nec lacinia lacus. Sed elit quam, consectetur et ultricies sit
          amet, bibendum sed lectus. Mauris in tortor in turpis imperdiet
          molestie. Vivamus feugiat neque at consectetur interdum. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. 
        </h2>
      </div>
    </div>
  );
};

export default About;
