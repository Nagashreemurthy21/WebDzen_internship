function Signup() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p>Join and explore powerful AI models</p>

        <form className="auth-form">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Create strong password" />

          <button type="submit" className="primary-btn full-btn">
            Create Account
          </button>

          <div className="auth-divider">OR</div>

          <button type="button" className="google-btn">
            Continue with Google
          </button>

          <div className="auth-footer">
            Already have an account? <span className="auth-link">Login</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;