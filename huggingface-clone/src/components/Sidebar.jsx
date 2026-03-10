import { NavLink } from "react-router-dom";


function Sidebar() {
  const activeStyle = ({ isActive }) =>
    isActive ? "sidebar-link active" : "sidebar-link";

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">TASKS</h3>

      <NavLink to="/text-generation" className={activeStyle}>
        <span className="icon">📝</span>
        <span>Text Generation</span>
      </NavLink>

      <NavLink to="/image-generation" className={activeStyle}>
        <span className="icon">🎨</span>
        <span>Image Generation</span>
      </NavLink>

      <NavLink to="/audio-processing" className={activeStyle}>
        <span className="icon">🎧</span>
        <span>Audio Processing</span>
      </NavLink>

      <NavLink to="/video-ai" className={activeStyle}>
        <span className="icon">🎬</span>
        <span>Video AI</span>
      </NavLink>

      <NavLink to="/ai-agents" className={activeStyle}>
        <span className="icon">🤖</span>
        <span>AI Agents</span>
      </NavLink>
    </aside>
  );
}

export default Sidebar;