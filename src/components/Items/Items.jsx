import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import "./Items.css";

const Items = () => {
  return (
    <div className="Items">
      <div className="Watche">
        <div className="left">
          <h2>
            <AppleIcon />
            WATCH
          </h2>
          <h5>ULTRA</h5>
          <h4>Adventure awaits</h4>
          <div className="links">
            <a href="#home">Learn More > </a>
            <a href="#home">Order Now > </a>
          </div>
          <img
            src="https://www.apple.com/newsroom/images/product/watch/standard/Apple-Watch-Ultra-Orange-Alpine-Loop-Action-button-220907_big.jpg.large.jpg"
            alt=""
          />
        </div>
        <div className="rights">
          <h2>
            <AppleIcon />
            WATCH
          </h2>
          <h5>SERIES 8</h5>
          <h4>A healthy leap ahead</h4>
          <div className="links">
            <a href="#home">Learn More > </a>
            <a href="#home">Order Now > </a>
          </div>
          <img
            src="https://www.apple.com/v/apple-watch-series-8/a/images/meta/gps-lte__de35dernyje6_og.png"
            alt=""
          />
        </div>
      </div>

      <div className="iPad">
        <div className="left">
          <h2>iPad Pro</h2>
          <h3>Supercharged by M2 </h3>
          <h4>Available starting 10.26</h4>
          <div className="links">
            <a href="#home">Learn More > </a>
            <a href="#home">Order Now > </a>
          </div>
          <img
            src="https://www.apple.com/in/ipad-pro/images/overview/hero/hero_combo__fcqcc3hbzjyy_large.jpg"
            alt=""
          />
        </div>
        <div className="rights">
          <h2>
            <AppleIcon /> tv 4K
          </h2>
          <h4>
            The Apple experience <br /> Cinematic in every sense{" "}
          </h4>
          <h5>Available starting 10.26</h5>

          <div className="links">
            <a href="#home">Learn More > </a>
            <a href="#home">Order Now > </a>
          </div>
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202210_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1664896361164"
            alt=""
          />
        </div>
      </div>

      <div className="airpods">
        <div className="rights">
          <h2>Air Pods Pro </h2>
          <h4>Rebuilt from the sound up.</h4>
          <div className="links">
            <a href="#home">Learn More > </a>
            <a href="#home">Buy > </a>
          </div>
          <img
            src="https://www.apple.com/v/airpods-pro/d/images/meta/og__ch3csr9zmviq_overview.png"
            alt=""
          />
        </div>
        <div className="left">
          <h2>
            <AppleIcon />
            Card
          </h2>
          <h4>
            Get upto 3% daily Cash back <br />
            with every purchase
          </h4>
          <div className="links">
            <a href="#home">Learn More > </a>
            <a href="#home">Buy > </a>
          </div>
          <img
            src="https://www.thinkingtech.in/wp-content/uploads/apple-credit-card.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Items;
