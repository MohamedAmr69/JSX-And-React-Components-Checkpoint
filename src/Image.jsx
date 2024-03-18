import React from "react";
import "./style.css";
import Chair1 from "././images/Chair1.jpg";
// import Chair2 from "././images/Chair2.jpg";

function Image({ image }) {
  return (
    <div>
      <img src={Chair1} alt="Chiar" height={270} width={180} />
    </div>
  );
}

export default Image;
