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
    <div className="about">
    <div className="heroBanner" >
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <div className="container">
        <h1 >About</h1>
        <h2>
          MOVIE-BIT web application was built on basic Application Program
          Interface data from The Movie Database - TMDB.  MOVIE-BIT keeps the Top Cast of
          actors, official videos, similar movies, recommended movies, movies,
          movie details; a list of movies and tv-shows with the selection by
          genres and sorting by many options such as title, release, popularity
          and rating. The main aim of MOVIE-BIT is to help movie lovers know
          about all kinds of movies, tv-shows, and choose interesting ones. I wish
          to you a pleasant search and an asquentence with pleanty movies and tv
          shows!
        </h2>
      </div>
    </div></div>
  );
};

export default About;
