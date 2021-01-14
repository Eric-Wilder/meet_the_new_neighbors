import React from "react";

function Card (props) {
    return (
      <div
        className="card"
        style={{
          backgroundImage: props.family.photo ? `url(${props.family.photo})` : "none"
        }}
      >
        {!props.family.photo && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
  
      </div>
    );
  }
  
  export default Card;
  