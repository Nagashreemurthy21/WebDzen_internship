function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p>Access your AI workspace and models</p>

        <form className="auth-form">
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <div className="auth-row">
            <label className="checkbox">
              <input type="checkbox" />
              Remember me
            </label>

            <span className="auth-link">Forgot password?</span>
          </div>

          <button className="auth-btn">Login</button>

          <div className="divider">OR</div>

          <button type="button" className="google-btn">
            Continue with Google
          </button>

          <div className="auth-footer">
            Don’t have an account? <span className="auth-link">Sign up</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

