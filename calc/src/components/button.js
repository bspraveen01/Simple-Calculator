import React from "react";

const Button = ({ value, onClick }) => {
  const isOperator = ["+", "-", "*", "/", "="].includes(value);
  const isClear = value === "C";
  const isEqual = value === "=";

  return (
    <button
      className={`${isOperator ? "operator" : ""} ${
        isClear ? "clear" : ""
      } ${isEqual ? "equal" : ""}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;
