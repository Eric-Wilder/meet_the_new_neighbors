import React from "react";
import "./jumbotron.css";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron">
      {children}
    </div>
  );
}

export default Jumbotron;
