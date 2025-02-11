import React from "react";
import PropTypes from "prop-types";

function ExampleCarouselImage({ text }) {
  return (
    <div className="carousel-image-container">
      <img
        src="/src/Image/mission.png" // Replace with your actual image source
        alt={text}
        className="carousel-image"
      />
    </div>
  );
}

ExampleCarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
