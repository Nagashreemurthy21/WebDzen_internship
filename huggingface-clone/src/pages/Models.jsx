import { useNavigate } from "react-router-dom";

function Models() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">

      {/* HEADER SECTION */}
      <div className="models-header">
        <h1>Explore AI Models</h1>
        <p className="models-subtitle">
          Discover powerful AI models for text, chat, code, vision and speech.
        </p>

        <div className="models-search-wrapper">
          <input
            type="text"
            placeholder="Search models..."
            className="models-search"
          />
        </div>
      </div>

      {/* MODELS GRID */}
      <div className="models-grid">

        {/* TEXT GENERATOR */}
        <div className="model-card">
          <span className="model-tag">Text</span>
          <h3>Text Generator Pro</h3>
          <p>Generate high-quality text responses for any prompt.</p>
          <div className="model-footer">
            <span className="rating">⭐ 4.8</span>
            <button onClick={() => navigate("/playground/text-generator")}>
              Open Playground →
            </button>
          </div>
        </div>

        {/* CHAT ASSISTANT */}
        <div className="model-card">
          <span className="model-tag">Chat</span>
          <h3>Chat Assistant AI</h3>
          <p>Conversational AI powered by advanced language models.</p>
          <div className="model-footer">
            <span className="rating">⭐ 4.6</span>
            <button onClick={() => navigate("/playground/chat-assistant")}>
              Open Playground →
            </button>
          </div>
        </div>

        {/* SUMMARIZER */}
        <div className="model-card">
          <span className="model-tag">Text</span>
          <h3>Summarizer AI</h3>
          <p>Summarize long content into concise insights instantly.</p>
          <div className="model-footer">
            <span className="rating">⭐ 4.5</span>
            <button onClick={() => navigate("/playground/summarizer")}>
              Open Playground →
            </button>
          </div>
        </div>

        {/* CODE GENERATOR */}
        <div className="model-card">
          <span className="model-tag">Code</span>
          <h3>Code Generator</h3>
          <p>Generate production-ready code snippets in seconds.</p>
          <div className="model-footer">
            <span className="rating">⭐ 4.7</span>
            <button onClick={() => navigate("/playground/code-generator")}>
              Open Playground →
            </button>
          </div>
        </div>

        {/* IMAGE CLASSIFIER */}
        <div className="model-card">
          <span className="model-tag">Vision</span>
          <h3>Image Classifier</h3>
          <p>Classify and detect objects in images instantly.</p>
          <div className="model-footer">
            <span className="rating">⭐ 4.4</span>
            <button onClick={() => navigate("/playground/image-classifier")}>
              Open Playground →
            </button>
          </div>
        </div>

        {/* SPEECH TO TEXT */}
        <div className="model-card">
          <span className="model-tag">Speech</span>
          <h3>Speech To Text</h3>
          <p>Convert spoken audio into accurate text transcription.</p>
          <div className="model-footer">
            <span className="rating">⭐ 4.9</span>
            <button onClick={() => navigate("/playground/speech-to-text")}>
              Open Playground →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Models;
