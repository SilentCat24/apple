import React from "react";
import "./contents.css";

const content = () => {
  return (
    <div className="Contents">
      <div className="upper">
        <h2>iPhone 14 Pro</h2>
        <h4>Pro.Beyond</h4>
        <a href="#home"> Learn more > </a>
        <a href="#home"> Buy > </a>
        <div className="picture">
          <img
            src="https://www.apple.com/v/iphone-14-pro/b/images/meta/iphone-14-pro_overview__e2a7u9jy63ma_og.png"
            alt=""
            className="phoneImage"
          />
        </div>
      </div>
    </div>
  );
};

export default content;
