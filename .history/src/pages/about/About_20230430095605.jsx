import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../components/lazyLoadImage/Img.jsx";
import "./style.scss";
const About = () => {
      const { url } = useSelector((state) => state.home);
      const { data, loading } = useFetch("/movie/upcoming");
    const [background, setBackground] = useState(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        return bg;
      });
    
      useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
      }, [data, url.backdrop]);
  return (
      
              <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
          <div className="opacity-layer"></div>
      
          <div className="container">
    <h1>About</h1>
    <h3>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, massa et laoreet ornare, augue nibh molestie tortor, ac varius dolor nisl sit amet orci. Duis condimentum magna tempor dui commodo cursus. Aenean et mollis mi. In nec volutpat leo. Cras est velit, commodo ut ex eu, varius eleifend odio. Sed ut convallis ex. Nunc nec lacinia lacus. Sed elit quam, consectetur et ultricies sit amet, bibendum sed lectus. Mauris in tortor in turpis imperdiet molestie. Vivamus feugiat neque at consectetur interdum.
Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque id libero sollicitudin, lacinia purus eget, posuere magna. Suspendisse ornare venenatis auctor. Sed et velit eu tellus sollicitudin commodo. Nam rhoncus magna non tortor venenatis, sit amet tincidunt metus finibus. Phasellus ac orci sed magna sodales faucibus nec sed risus. Nulla molestie imperdiet ante. Curabitur non turpis a magna eleifend ullamcorper eu id velit. Integer molestie metus non varius molestie. Praesent id nibh pulvinar, bibendum neque sit amet, vulputate ligula. Nullam in mauris justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam rutrum nec sem ut rhoncus. Cras tempus leo vel est luctus, vel condimentum massa feugiat.

</h3>
          </div>
      </div>
      
  )
}

export default About;