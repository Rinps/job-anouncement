import React from "react";

const Job = (props) => {
  var classAndColor = "job " + props.color;
  return (
    <div className={classAndColor}>
      <p className="description">{props.description}</p>
      <p className="detail">
        {props.contractType} - {props.country} - {props.city}
      </p>
    </div>
  );
};

export default Job;
