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
Vivamus sollicitudin bibendum velit, in commodo dolor. Fusce tellus nunc, molestie et elit nec, egestas rutrum ligula. Praesent dolor risus, sagittis ut facilisis a, consequat id odio. Proin auctor turpis at urna ultricies, ac lobortis mi ullamcorper. Nam quis erat dignissim, convallis eros eget, pulvinar leo. Sed porta sodales felis vestibulum viverra. Nam non velit luctus, sagittis ipsum et, mollis dolor. In congue lacinia felis, in posuere nulla euismod eu. Curabitur efficitur magna et tincidunt convallis. Suspendisse et nunc eu magna malesuada sodales a sed est. Integer egestas felis eu tellus molestie ornare nec non diam. Fusce malesuada nulla dui, a dictum nibh elementum non. Nam quam augue, placerat at scelerisque eu, fringilla at augue. Integer vel orci at odio facilisis finibus. Mauris ultrices, metus vel mattis consequat, augue nulla consectetur magna, et interdum elit est et nisi. Sed purus nunc, imperdiet ac posuere laoreet, eleifend in dui.
Ut accumsan sem at maximus convallis. Nulla ullamcorper enim lacus, eu dictum enim cursus ut. Nulla vel nibh condimentum, ornare felis placerat, tincidunt augue. Sed placerat nunc eget leo congue, nec ornare justo aliquet. Praesent volutpat semper massa id tempus. Quisque ac facilisis nisl. Quisque et felis et tortor tempus dignissim eget a orci. Aenean aliquet dignissim lectus, quis ultrices mi. Fusce aliquam vehicula libero, in maximus ante volutpat in. Quisque eget blandit nibh. Praesent vehicula augue ante, in blandit massa euismod ac. Maecenas vel vehicula nunc, varius suscipit est. Maecenas at porta mauris. Donec feugiat iaculis augue eu blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Mauris sit amet odio venenatis, aliquam dolor a, ullamcorper nisi. Morbi suscipit non ex mollis dapibus. Aenean consequat dictum accumsan. Donec ultricies lobortis nibh eu gravida. Proin at scelerisque magna, imperdiet bibendum lectus. Pellentesque semper facilisis arcu a pharetra. Fusce pharetra id nisi sed egestas. Aenean porttitor nisi vitae efficitur sollicitudin. Mauris et diam sed purus sagittis consequat. Donec vel nunc orci. Etiam non mi ligula. Ut hendrerit sit amet urna eget aliquet. Nam consectetur mauris nibh, quis malesuada elit molestie vitae.</h3>
          </div>
      
  )
}

export default About