import { useState } from "react";
import "./Task4.css";

function Task4() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "task4-container dark-mode" : "task4-container light-mode"}>
      <h1>React useState - Counter App</h1>

      <div className="theme-section">
        <h2>Current Theme: {isDarkMode ? "Dark Mode" : "Light Mode"}</h2>

        <button className="theme-button" onClick={toggleTheme}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      <div className="counter-card">
        <h2>Counter</h2>

        <div className="counter-value">{count}</div>

        <div className="counter-buttons">
          <button className="increment-button" onClick={increment}>
            Increment
          </button>

          <button className="decrement-button" onClick={decrement}>
            Decrement
          </button>

          <button className="reset-button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task4;
