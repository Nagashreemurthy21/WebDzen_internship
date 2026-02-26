function Spaces() {
  return (
    <div className="page-wrapper">

      <div className="spaces-header">
        <h1>Spaces · The AI App Directory</h1>

        <div className="spaces-controls">
          <input
            type="text"
            placeholder="Filter by name..."
            className="spaces-search"
          />

          <select className="spaces-sort">
            <option>Sort: Relevance</option>
            <option>Most Liked</option>
            <option>Recently Updated</option>
          </select>
        </div>

        <div className="category-bar">
          <button>Image Generation</button>
          <button>Video Generation</button>
          <button>Text Generation</button>
          <button>Speech</button>
          <button>3D Modeling</button>
          <button>Object Detection</button>
        </div>
      </div>

      <div className="spaces-grid">

        <div className="space-card">
          <span className="running-badge">Running</span>
          <h3>Chat With Janus-Pro-7B</h3>
          <p>Unified multimodal generation model.</p>
          <div className="space-stats">
            <span>❤️ 1.2K</span>
            <span>👁 8.5K</span>
          </div>
        </div>

        <div className="space-card">
          <span className="running-badge">Running</span>
          <h3>Qwen 2.5 Demo</h3>
          <p>Chatbot responses powered by AI.</p>
          <div className="space-stats">
            <span>❤️ 950</span>
            <span>👁 6.1K</span>
          </div>
        </div>

        <div className="space-card">
          <span className="running-badge">Running</span>
          <h3>NeuralJam</h3>
          <p>AI-powered puzzle game.</p>
          <div className="space-stats">
            <span>❤️ 620</span>
            <span>👁 4.8K</span>
          </div>
        </div>

        <div className="space-card">
          <span className="running-badge">Running</span>
          <h3>Stable Diffusion Studio</h3>
          <p>Generate stunning AI images instantly.</p>
          <div className="space-stats">
            <span>❤️ 2.3K</span>
            <span>👁 12K</span>
          </div>
        </div>

        <div className="space-card">
          <span className="running-badge">Running</span>
          <h3>Voice Assistant AI</h3>
          <p>Speech-to-text and conversational AI in one place.</p>
          <div className="space-stats">
            <span>❤️ 780</span>
            <span>👁 5.2K</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Spaces;
