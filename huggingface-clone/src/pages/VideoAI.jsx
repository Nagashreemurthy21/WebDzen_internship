import { useState } from "react";
import axios from "axios";

function VideoAI() {
  const [prompt, setPrompt] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateVideo = async () => {
    if (!prompt) return;

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/video", {
        prompt,
      });

      setVideoUrl(res.data.video);
      setLoading(false);
    } catch (error) {
      console.error("Video Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="video-wrapper">
      <div className="video-card">
        <h1>🎬 AI Video Generator</h1>
        <p>Create short AI-generated demo videos using natural language prompts.</p>

        <textarea
          placeholder="Describe the video you want to generate..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="video-input"
        />

        <button
          className="video-btn"
          onClick={generateVideo}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Video"}
        </button>

        {videoUrl && (
          <div className="video-result">
            <video src={videoUrl} controls />
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoAI;