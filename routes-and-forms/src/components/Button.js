import React from "react";

const Button = ({ id, type, text }) => {
  return (
    <div>
      <button id={id} type={type}>
        {" "}
        {text}
      </button>
    </div>
  );
};

export default Button;
