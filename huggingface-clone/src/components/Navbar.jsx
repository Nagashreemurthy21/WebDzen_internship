import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">🤗 HuggingFace Clone</div>

      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/docs">Docs</Link>

        <div
          className="community-wrapper"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <span className="community-link">Community ▾</span>

          {open && (
            <div className="community-dropdown">
              <Link to="/blogs" className="dropdown-item">
                Blog Articles
              </Link>

              <Link to="/blogs" className="dropdown-item">
                Social Posts
              </Link>

              <Link to="/blogs" className="dropdown-item">
                Daily Papers
              </Link>
            </div>
          )}
        </div>

        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
}