import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Models from "./pages/Models";
import Datasets from "./pages/Datasets";
import Spaces from "./pages/Spaces";
import Docs from "./pages/Docs";
import DocDetails from "./pages/DocDetails";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./index.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* MAIN */}
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/datasets" element={<Datasets />} />
        <Route path="/spaces" element={<Spaces />} />

        {/* DOCS */}
        <Route path="/docs" element={<Docs />} />
        <Route path="/docs/:slug" element={<DocDetails />} />

        {/* BLOGS */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;