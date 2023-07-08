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
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
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
      <div className="container">
        <h1 data-testid="about-1">About</h1>
        <h2>
          <span>
            MOVIE-BIT web application was built on basic Application Program Interface data from The Movie Database - TMDB.</span> 
          <
          Every year since 2008, the number of contributions to this database has increased. With over 1,000,000 developers and companies using TMDB API platform, TMDB has become a premiere source for metadata.</span>
          It keeps the Top Cast of actors, official videos, similar movies, recommended movies, movies, movie details; a list of movies and tv-shows with the selection by genres and sorting by many options such as title, release, popularity and rating.
          The main aim of  MOVIE-BIT is to help movie lovers know about all kinds of movies, tv-shows, and choose interesting ones. 
          My experience working with TMDB has been positively and fantastic! I wist to you a pleasant search and an asquentence with pleanty movies and  tv shows!
        </h2>
      </div>
    </div>
  );
};

export default About;
