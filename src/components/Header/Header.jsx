import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="left">
        <img
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJQJ3J_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1645890635883"
          alt=""
          className="Image"
        />
      </div>

      <div className="right">
        <h2>iPad</h2>
        <h4>Lovabale.Drawable.Magical.</h4>
        <h5>Available starting 10.26</h5>

        <div className="links">
          <a href="#home">Learn More > </a>
          <a href="#home">Order Now > </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
