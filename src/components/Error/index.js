import React from "react";

const Error = ({ message = "Something went wrong" }) => {
  return <div className="ui red message">{message}</div>;
};

export default Error;
