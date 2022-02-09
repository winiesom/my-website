import React from "react";
import "./parallax.css";

import { Parallax } from "react-parallax";

import imgSeven from "../../assets/images/imgSeven.jpg";

const ParallaxSection = () => {
  return (
    <div>
      <Parallax
        blur={1}
        bgImage={imgSeven}
        bgImageAlt="Front end solutions"
        strength={200}
        className="parallax-bg">
        <div className="parallax-content"> Front end solutions</div>
      </Parallax>
    </div>
  );
};

export default ParallaxSection;
