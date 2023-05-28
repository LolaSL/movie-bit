
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import "./style.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";

// const Cast = ({ data, loading }) => {
//   const { url } = useSelector((state) => state.home);

//   const renderSkeleton = () => {
//     return (
//       <div className="skItem">
//         <div className="circle skeleton"></div>
//         <div className="row skeleton"></div>
//         <div className="row2 skeleton"></div>
//       </div>
//     );
//   };

//   return (
//     <div className="castSection">
//       <ContentWrapper>
//         <div className="sectionHeading">Top Cast</div>
//         {!loading ? (
//           <div className="listItems">
//             {data?.map((item, index) => {
//               let imgUrl = item.profile_path
//                 ? url.profile + item.profile_path
//                 : avatar;
//               return (
//                 <div key={index} className="listItem">
//                   <div className="profileImg">
//                     <Img src={imgUrl} />
//                   </div>
//                   <div className="name">{item.name}</div>
//                   <div className="character">{item.character}</div>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//             <div className="castSkeleton">
//           {Array.from({ length: 5 }).map(renderSkeleton)}
//           </div>
//         )}
//       </ContentWrapper>
//     </div>
//   );
// };

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const renderSkeleton = () => (
    <div className="skItem" key={Math.random()}>
      <div className="circle skeleton"></div>
      <div className="row skeleton"></div>
      <div className="row2 skeleton"></div>
    </div>
  );

  const renderCast = () => (
    <div className="listItems">
      {data?.map((item) => {
        const imgUrl = item.profile_path ? url.profile + item.profile_path : avatar;
        return (
          <div key={item.id} className="listItem">
            <div className="profileImg">
              <Img src={imgUrl} />
            </div>
            <div className="name">{item.name}</div>
            <div className="character">{item.character}</div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? renderCast() : <div className="castSkeleton">{Array(5).fill().map(renderSkeleton)}</div>}
      </ContentWrapper>
    </div>
  );
}
Cast.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      profile_path: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
    })
  ),
  loading: PropTypes.bool,
};




export default Cast;