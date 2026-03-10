import { useState } from "react";
import axios from "axios";

function Playground() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generateText = async () => {
    try {
      setLoading(true);
      setOutput("");

      const res = await axios.post(
        "http://localhost:5000/api/generate",
        { prompt }
      );

      setOutput(res.data.choices[0].message.content);
    } catch (error) {
      setOutput("Error generating response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="models-container">
      <h1 className="models-title">AI Playground</h1>

      <div className="playground-box">
        <textarea
          className="playground-input"
          placeholder="Enter your prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          className="generate-btn"
          onClick={generateText}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        {output && (
          <div className="playground-output">
            <h3>Response:</h3>
            <p>{output}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Playground;