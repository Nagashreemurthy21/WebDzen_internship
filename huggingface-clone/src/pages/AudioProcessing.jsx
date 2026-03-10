import { useState } from "react";
import axios from "axios";
import "./AudioProcessing.css";

function AudioProcessing() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult("");
  };

  const transcribeAudio = async () => {
    if (!file) {
      alert("Please select an audio file");
      return;
    }

    const formData = new FormData();
    formData.append("audio", file); // MUST match backend upload.single("audio")

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/audio",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data.text);
    } catch (error) {
      console.error("Transcription error:", error);
      setResult("Failed to transcribe audio.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="audio-container">
      <div className="audio-card">
        <h1 className="audio-title">🎙 Audio Processing</h1>

        <div className="audio-input-group">
          <input
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
            className="file-input"
          />

          <button
            onClick={transcribeAudio}
            className="audio-btn"
            disabled={loading}
          >
            {loading ? "Transcribing..." : "Transcribe Audio"}
          </button>
        </div>

        {result && (
          <div className="audio-result">
            <h3>Transcription Result</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AudioProcessing;