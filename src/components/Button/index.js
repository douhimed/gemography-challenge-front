import React from "react";

const Button = ({ icon, value, onClickHandler, desabled }) => {
  return (
    <a className="item" onClick={onClickHandler} desabled={desabled}>
      {(icon && <i className={`${icon} arrow icon`}></i>) || value}
    </a>
  );
};

export default Button;
