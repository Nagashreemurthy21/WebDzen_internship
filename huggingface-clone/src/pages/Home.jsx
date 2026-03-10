import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* ================= HERO ================= */}
      <section className="home-hero">
        <div className="home-left">
          <h1>
            Build the Future of <span>AI</span>
          </h1>

          <p>
            Explore open-source models, deploy AI agents,
            and integrate real-time inference into your applications.
            Powerful. Scalable. Production-ready.
          </p>

          <div className="home-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/models")}
            >
              Explore Models
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/text-generation")}
            >
              Try AI Playground
            </button>
          </div>

          <div className="home-stats">
            <div>
              <h3>10+</h3>
              <span>Models</span>
            </div>
            <div>
              <h3>5+</h3>
              <span>Datasets</span>
            </div>
            <div>
              <h3>24/7</h3>
              <span>Inference API</span>
            </div>
          </div>
        </div>

        <div className="home-right">
          <div className="preview-card">
            <h3>🚀 GPT-2 Live Preview</h3>
            <p>
              "The future of artificial intelligence is open,
              collaborative and accessible to everyone."
            </p>

            <div className="preview-tags">
              <span>Text Generation</span>
              <span>Open Source</span>
              <span>Inference API</span>
            </div>
          </div>
        </div>
      </section>


      {/* ================= FEATURES ================= */}
      <section className="home-features">
        <h2>Why Choose Our Platform?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>High Performance</h3>
            <p>Optimized infrastructure for real-time AI inference.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Enterprise Security</h3>
            <p>Secure APIs and encrypted data pipelines.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Global Access</h3>
            <p>Deploy AI models worldwide with low latency.</p>
          </div>
        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="home-steps">
        <h2>How It Works</h2>

        <div className="steps-grid">
          <div className="step-card">
            <h3>1️⃣ Choose a Model</h3>
            <p>Select from text, image, video, or AI agents.</p>
          </div>

          <div className="step-card">
            <h3>2️⃣ Integrate API</h3>
            <p>Use our Inference API for real-time AI responses.</p>
          </div>

          <div className="step-card">
            <h3>3️⃣ Deploy & Scale</h3>
            <p>Launch production-ready AI apps instantly.</p>
          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="home-cta">
        <h2>Start Building with AI Today</h2>
        <p>Join developers building the next generation of intelligent applications.</p>
        <button
          className="primary-btn"
          onClick={() => navigate("/signup")}
        >
          Get Started
        </button>
      </section>

    </div>
  );
}

export default Home;