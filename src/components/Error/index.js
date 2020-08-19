import React from "react";

const Error = ({ color = "red", message = "Something went wrong" }) => {
  return <div className={`ui ${color} message`}>{message}</div>;
};

export default Error;
