import React from "react-dom";

const Button = ({ title = "Not Defined" }) => (
  <div>
    <button className="button">{title}</button>
  </div>
);

export default Button;
