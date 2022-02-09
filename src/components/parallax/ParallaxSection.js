import React from "react";
import "./parallax.css";

import { Parallax } from "react-parallax";

import imgFour from "../../assets/images/imgFour.jpg";

const ParallaxSection = () => {
  return (
    <div>
      <Parallax
        blur={1}
        bgImage={imgFour}
        bgImageAlt="Front end solutions"
        strength={200}
        className="parallax-bg">
        <div className="parallax-content"> Front end solutions</div>
      </Parallax>
    </div>
  );
};

export default ParallaxSection;
