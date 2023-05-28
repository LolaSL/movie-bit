import { useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";

// const SwitchTabs = ({ data, onTabChange }) => {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [left, setLeft] = useState(0);

//   const activeTab = (tab, index) => {
//     setLeft(index * 100);
//     setTimeout(() => {
//       setSelectedTab(index);
//     }, 300);
//     onTabChange(tab, index);
//   };

//   return (
//     <div className="switchingTabs">
//       <div className="tabItems">
//         {data?.map((tab, index) => (
//           <span
//             key={index}
//             className={`tabItem ${selectedTab === index ? "active" : ""}`}
//             onClick={() => activeTab(tab, index)}
//           >
//             {tab}
//           </span>
//         ))}
//         <span className="movingBg" style={{ left: `${left}%` }} />
//       </div>
//     </div>
//   );
// };
import { useState } from "react";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const activeTab = (tab, index) => {
    setSelectedTab(index);
    onTabChange(tab, index);
  };

  const tabItems = data.map((tab, index) => (
    <span
      key={index}
      className={`tabItem ${selectedTab === index ? "active" : ""}`}
      onClick={() => activeTab(tab, index)}
    >
      {tab}
    </span>
  ));

  const movingBgStyle = { left: selectedTab * 100 };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {tabItems}
        <span className="movingBg" style={movingBgStyle} />
      </div>
    </div>
  );
};
SwitchTabs.propTypes = {
  data: PropTypes.array,
  onTabChange: PropTypes.func,
};

export default SwitchTabs;
