import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const activeStyle = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">

      {/* Logo */}
      <NavLink to="/" className="logo">
        🤗 HuggingFace Clone
      </NavLink>

      <div className="nav-right">

        <NavLink to="/models" className={activeStyle}>
          Models
        </NavLink>

        <NavLink to="/datasets" className={activeStyle}>
          Datasets
        </NavLink>

        <NavLink to="/docs" className={activeStyle}>
          Docs
        </NavLink>

        {/* COMMUNITY DROPDOWN */}
        <div className="dropdown" ref={dropdownRef}>

          <button
            className="nav-link dropdown-toggle"
            onClick={() => setOpen(!open)}
          >
            Community ▾
          </button>

          {open && (
            <div
              className="dropdown-menu"
              onClick={(e) => e.stopPropagation()}
            >
              <NavLink
                to="/blogs"
                className="dropdown-item"
                onClick={() => setOpen(false)}
              >
                Blog Articles
              </NavLink>

              <NavLink
                to="/social"
                className="dropdown-item"
                onClick={() => setOpen(false)}
              >
                Social Posts
              </NavLink>

              <NavLink
                to="/papers"
                className="dropdown-item"
                onClick={() => setOpen(false)}
              >
                Daily Papers
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/enterprise" className={activeStyle}>
          Enterprise
        </NavLink>

        <NavLink to="/pricing" className={activeStyle}>
          Pricing
        </NavLink>

        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>

        <NavLink to="/signup" className="signup-btn">
          Sign Up
        </NavLink>

      </div>
    </nav>
  );
}

export default Navbar;