import React, { useState, useEffect } from "react";
import "./Task7.css";

function Task7() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="task7-container">
      <div className="task7-heading">
        <h1>Users Directory</h1>
        <p>React useEffect API Integration</p>
      </div>

      {loading ? (
        <h2 className="loading-message">Loading users...</h2>
      ) : (
        <div className="users-grid">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <div className="user-header">
                <span className="user-id">ID: {user.id}</span>
                <h2>{user.name}</h2>
                <p>@{user.username}</p>
              </div>

              <div className="user-details">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {user.website}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Task7;
