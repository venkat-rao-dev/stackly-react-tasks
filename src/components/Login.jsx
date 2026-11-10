function Login(props) {
  return (
    <div className="login-card">
      <h2>Welcome Back!</h2>
      <p>Please login to access the home page.</p>

      <button className="login-button" onClick={props.onLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
