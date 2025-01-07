import React, { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button"; // Ensure the file name matches the import
import "./index.css";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        setResult(eval(input)); // Use eval cautiously, replace with a safer parser if needed
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
          <Button key={btn} value={btn} onClick={() => handleClick(btn)} />
        ))}
        {["4", "5", "6", "*"].map((btn) => (
          <Button key={btn} value={btn} onClick={() => handleClick(btn)} />
        ))}
        {["1", "2", "3", "-"].map((btn) => (
          <Button key={btn} value={btn} onClick={() => handleClick(btn)} />
        ))}
        {["C", "0", "=", "+"].map((btn) => (
          <Button key={btn} value={btn} onClick={() => handleClick(btn)} />
        ))}
      </div>
    </div>
  );
};

export default App;
