import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-title">Create Account</h2>
        <p className="login-subtitle">
          Join and explore powerful AI models
        </p>

        <form className="login-form">
          <div className="login-input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Nagashree K S" />
          </div>

          <div className="login-input-group">
            <label>Email Address</label>
            <input type="email" placeholder="naagashree42@gmail.com" />
          </div>

          <div className="login-input-group">
            <label>Password</label>
            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create strong password"
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          <button className="login-btn">
            Create Account
          </button>
        </form>

        <div className="login-divider">
          <span>OR</span>
        </div>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="signup-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;