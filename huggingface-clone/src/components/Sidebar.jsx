import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>

      <nav className="sidebar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/models">Models</NavLink>
        <NavLink to="/datasets">Datasets</NavLink>
        <NavLink to="/spaces">Spaces</NavLink>
        <NavLink to="/playground">AI Playground</NavLink>
        <NavLink to="/analytics">Analytics</NavLink>
      </nav>

      <div className="sidebar-divider"></div>

      <div className="sidebar-extra">
        <p className="sidebar-section-title">Resources</p>
        <NavLink to="/docs">Documentation</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/enterprise">Enterprise</NavLink>
      </div>

      <div className="sidebar-footer">
        <p>v1.0</p>
      </div>
    </div>
  );
};

export default Sidebar;