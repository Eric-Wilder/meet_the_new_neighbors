import React from "react";
import "./jumbotron.css";

function Jumbotron({ children }) {
  return (
    <div
      // style={{ backgroundImage: "url(/hero.jpg)" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
