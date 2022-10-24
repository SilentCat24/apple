import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <div className="Body">
      <div>
        <h3>IPhone 14</h3>
        <h4>Big and bigger</h4>
        <div className="linked">
          <a href="#home">Learn more > </a>
          <a href="#home">Buy > </a>
        </div>
      </div>

      <div className="lower">
        <img
          src="https://images.hindustantimes.com/tech/img/2022/09/07/960x540/Screenshot_2022-09-07_231953_1662573042775_1662573563107_1662573563107.png"
          alt=""
          className="image"
        />
      </div>
    </div>
  );
};

export default Body;
