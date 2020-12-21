import React from "react";
import Title from "./Title";

const Header = (props) => {
  return (
    <div className="header">
      <Title text={props.title} />
    </div>
  );
};

export default Header;
