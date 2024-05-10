import React from "react";

const Span = ({ title, value }) => {
  return (
    <span className="flex flex-col">
      <p className="font-light">{title}</p>
      <h3
        className="font-bold text-purple-700
"
      >
        {value}
      </h3>
    </span>
  );
};

export default Span;
