import { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import "./Task3.css";

function Task3() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="task3-container">
      <h1 className="task3-heading">
        List Rendering & Conditional Rendering
      </h1>

      {isLoggedIn ? (
        <Home onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default Task3;
