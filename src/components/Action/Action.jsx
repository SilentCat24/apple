import React from "react";
import ImageSlider from "./ImageSlider";

const Action = () => {
  const slides = [
    {
      url: "https://www.koimoi.com/wp-content/new-galleries/2022/02/kgf-chapter-2-to-get-postponed-001.jpg",
      title: "beach",
    },
    {
      url: "https://flxt.tmsimg.com/assets/p21949998_b_h8_aa.jpg",
      title: "boat",
    },
    {
      url: "https://9to5mac.com/wp-content/uploads/sites/6/2022/10/how-to-watch-raymond-and-ray-apple-tv.jpg?quality=82&strip=all",
      title: "forest",
    },
    {
      url: "https://flxt.tmsimg.com/assets/p22437042_b_h9_ab.jpg",
      title: "city",
    },
    {
      url: "https://babylonberlin.eu/images/indogermanfilm/kantara_web100.jpg",
    },
  ];
  const containerStyles = {
    width: "90%",
    height: "600px",
    margin: "5rem auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Action;
