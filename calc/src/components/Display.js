import React from "react";

const Display = ({ input, result }) => {
  return (
    <div className="display">
      <div>{input || "0"}</div>
      <div style={{ fontSize: "1.2rem", color: "#aaa" }}>{result}</div>
    </div>
  );
};

export default Display;
