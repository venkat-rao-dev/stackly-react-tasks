import EmployeeList from "./EmployeeList";

function Home(props) {
  return (
    <div className="home-section">
      <div className="welcome-header">
        <div>
          <h2>Welcome Home!</h2>
          <p>You are successfully logged in.</p>
        </div>

        <button className="logout-button" onClick={props.onLogout}>
          Logout
        </button>
      </div>

      <EmployeeList />
    </div>
  );
}

export default Home;
