import { useNavigate } from "react-router-dom";

function Papers() {
  const navigate = useNavigate();

  const papers = [
  {
    id: "recursive-feedback",
    title: "Self-Improving Language Models via Recursive Feedback",
    date: "March 2, 2026",
    category: "LLM Research"
  },
  {
    id: "scaling-diffusion",
    title: "Scaling Diffusion Models to 100B Parameters",
    date: "March 1, 2026",
    category: "Diffusion"
  },
  {
    id: "dense-reward",
    title: "Dense Reward Optimization for Long-Form Reasoning",
    date: "Feb 28, 2026",
    category: "RLHF"
  },
  {
    id: "edge-quantization",
    title: "Efficient Quantization for Edge AI Devices",
    date: "Feb 26, 2026",
    category: "Deployment"
  },
  {
    id: "multimodal-scaling",
    title: "Scaling Laws for Multimodal AI Systems",
    date: "Feb 24, 2026",
    category: "Multimodal"
  },
  {
    id: "agent-architecture",
    title: "Designing Agentic Architectures for Autonomous AI",
    date: "Feb 22, 2026",
    category: "AI Agents"
  },
  {
    id: "long-context",
    title: "Extending LLM Context Windows Beyond 1M Tokens",
    date: "Feb 20, 2026",
    category: "LLM"
  },
  {
    id: "sparse-mixture",
    title: "Sparse Mixture of Experts for Efficient Training",
    date: "Feb 18, 2026",
    category: "Optimization"
  },
  {
    id: "vision-transformers",
    title: "Vision Transformers at Scale",
    date: "Feb 15, 2026",
    category: "Vision"
  },
  {
    id: "rlhf-benchmarks",
    title: "Benchmarking RLHF Across Diverse Domains",
    date: "Feb 12, 2026",
    category: "RLHF"
  },
  {
    id: "alignment-theory",
    title: "Toward Formal Theories of AI Alignment",
    date: "Feb 10, 2026",
    category: "Safety"
  },
  {
    id: "self-play-llm",
    title: "Self-Play Training for Language Models",
    date: "Feb 8, 2026",
    category: "Training"
  }
];

  return (
    <div className="papers-wrapper">
      <div className="papers-header">
        <h1>Daily Research & Papers</h1>
        <p>Latest breakthroughs shaping the AI world.</p>
      </div>

      <div className="papers-grid">
        {papers.map((paper) => (
          <div
            key={paper.id}
            className="paper-card"
            onClick={() => navigate(`/papers/${paper.id}`)}
          >
            <span className="paper-badge">{paper.category}</span>
            <h3>{paper.title}</h3>
            <div className="paper-date">{paper.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Papers;