import React, { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import "./index.css";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        setResult(eval(input)); // Note: `eval` should be used with caution
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="buttons">
        {["7", "8", "9", "/"].map((btn) => (
          <Button key={btn} value={btn} onClick={handleClick} />
        ))}
        {["4", "5", "6", "*"].map((btn) => (
          <Button key={btn} value={btn} onClick={handleClick} />
        ))}
        {["1", "2", "3", "-"].map((btn) => (
          <Button key={btn} value={btn} onClick={handleClick} />
        ))}
        {["C", "0", "=", "+"].map((btn) => (
          <Button key={btn} value={btn} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default App;
