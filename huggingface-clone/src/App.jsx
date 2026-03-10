import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";

/* Main Pages */
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Datasets from "./pages/Datasets";
import Docs from "./pages/Docs";
import DocDetails from "./pages/DocDetails";
import Enterprise from "./pages/Enterprise";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Signup from "./pages/Signup";
import Spaces from "./pages/Spaces";
import Social from "./pages/Social";
import Papers from "./pages/Papers";
import DatasetDetails from "./pages/DatasetDetails";
import SocialDetails from "./pages/SocialDetails";
import PaperDetails from "./pages/PaperDetails";
import EnterpriseDetails from "./pages/EnterpriseDetails";
import AgentDetails from "./pages/AgentDetails";

/* Models */
import Models from "./pages/Models";
import ModelDetails from "./pages/ModelDetails";

/* AI Task Pages */
import TextGeneration from "./pages/TextGeneration";
import ImageGeneration from "./pages/ImageGeneration";
import AudioProcessing from "./pages/AudioProcessing";
import VideoAI from "./pages/VideoAI";
import Agents from "./pages/Agents";

function App() {
  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="main-content">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Model Directory */}
            <Route path="/models" element={<Models />} />
            <Route path="/model/:slug" element={<ModelDetails />} />

            {/* Main */}
            <Route path="/datasets" element={<Datasets />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/spaces" element={<Spaces />} />

            {/* Community */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/social" element={<Social />} />
            <Route path="/papers" element={<Papers />} />
            <Route path="/datasets/:id" element={<DatasetDetails />} />
            <Route path="/social/:id" element={<SocialDetails />} />
            <Route path="/papers/:id" element={<PaperDetails />} />

            {/* Enterprise & Pricing */}
            <Route path="/enterprise" element={<Enterprise />} />
           <Route path="/enterprise-details" element={<EnterpriseDetails />} />
            <Route path="/pricing" element={<Pricing />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Docs Details */}
            <Route path="/docs/:id" element={<DocDetails />} />

            {/* AI Sidebar Tasks */}
            <Route path="/text-generation" element={<TextGeneration />} />
            <Route path="/image-generation" element={<ImageGeneration />} />
            <Route path="/audio-processing" element={<AudioProcessing />} />
            <Route path="/video-ai" element={<VideoAI />} />
            <Route path="/ai-agents" element={<Agents />} />
            <Route path="/ai-agents/:slug" element={<AgentDetails />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;