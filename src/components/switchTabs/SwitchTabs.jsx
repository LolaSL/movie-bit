import { useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";

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
