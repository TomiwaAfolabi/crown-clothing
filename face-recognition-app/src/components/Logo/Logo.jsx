import React from "react";

import Tilt from "react-parallax-tilt";
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt>
        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "darkgreen",
          }}
        >
          <h1>React Parallax Tilt 👀</h1>
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
