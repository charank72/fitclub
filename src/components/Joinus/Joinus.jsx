import React from "react";
import "./joinus.css";
function Joinus() {
  return (
    <div className="joinus" id="joinus">
      <div className="left-j">
        <div>
          <span className="stroke-text">ready to </span>
          {"  "}
          <span>level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text">with us ?</span>
        </div>
        <hr />
      </div>

      <div className="right-j">
        <form>
          <div>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email address"
            />
            <button className="btn">Join us</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Joinus;
