import React from "react";
import "./plans.css";
import tick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";
function Plalns() {
  return (
    <div className="plans" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      {/* header */}
      <div className="plans-header">
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text"> now</span>
      </div>
      <div className="paid-plans">
        {plansData.map((item, index) => (
          <div className="plans-category">
            {item.icon}
            <span>{item.name}</span>
            <span>${item.price}</span>
            <span
              className="feateures"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span>
                <img src={tick} alt="" />
                {item.features[0]}
              </span>
              <span>
                <img src={tick} alt="" />
                {item.features[1]}
              </span>
              <span>
                <img src={tick} alt="" />
                {item.features[2]}
              </span>
            </span>
            <button className="btn">join now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plalns;
