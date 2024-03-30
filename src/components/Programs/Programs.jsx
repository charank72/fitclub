import React from "react";
import "./Programs.css";
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
function Programs() {
  return (
    <div className="programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">explore our</span>
        <span>programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="program-category">
        {programsData.map((item,index)=>(
          <div className="category">
            <span key={index}>{item.image}</span>
            <span key={index}>{item.heading}</span>
            <span key={index}>{item.details}</span>
            <div className="join-now">Join Now <img src={RightArrow} alt="" /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
