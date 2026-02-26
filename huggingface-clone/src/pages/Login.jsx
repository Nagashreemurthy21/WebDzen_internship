import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">
          Access your AI workspace and models
        </p>

        <form className="login-form">
          <div className="login-input-group">
            <label>Email Address</label>
            <input
              type="email"
              defaultValue="naagashree42@gmail.com"
            />
          </div>

          <div className="login-input-group">
            <label>Password</label>
            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                defaultValue="Nagashree@123"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password"
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" defaultChecked />
              Remember me
            </label>

            <Link to="#" className="forgot-link">
              Forgot password?
            </Link>
          </div>

          <button className="login-btn">Login</button>
        </form>

        <div className="login-divider">
          <span>OR</span>
        </div>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;