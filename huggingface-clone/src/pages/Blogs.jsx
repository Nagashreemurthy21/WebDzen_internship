import { useNavigate } from "react-router-dom";

function Blogs() {
  const navigate = useNavigate();

  const featured = {
    id: "vlm-jetson",
    title: "Deploying Open Source Vision Language Models (VLM) on Jetson",
    author: "NVIDIA",
    date: "February 24, 2026",
    category: "Research",
    desc: "A deep dive into deploying efficient Vision-Language Models on embedded Jetson devices."
  };

  const articles = [
  {
    id: "ggml-llama",
    title: "GGML and llama.cpp join HF for Local AI",
    date: "February 20, 2026",
    category: "Community"
  },
  {
    id: "unsloth-jobs",
    title: "Train AI models with Unsloth & Hugging Face Jobs",
    date: "February 18, 2026",
    category: "Training"
  },
  {
    id: "trl-rlhf",
    title: "Understanding TRL and RLHF in Modern LLMs",
    date: "February 15, 2026",
    category: "Research"
  },
  {
    id: "transformers-v5",
    title: "Transformers v5 Released: Faster Attention & Quantization",
    date: "February 10, 2026",
    category: "Release"
  },
  {
    id: "whisper-v3",
    title: "Whisper Large v3: Multilingual Improvements",
    date: "February 5, 2026",
    category: "Audio"
  },
  {
    id: "stable-diffusion-xl",
    title: "Stable Diffusion XL: Production Ready Image Generation",
    date: "January 30, 2026",
    category: "Image"
  },
  {
    id: "fine-tuning-llama",
    title: "Fine-Tuning LLaMA 3 for Enterprise Applications",
    date: "January 28, 2026",
    category: "Enterprise"
  },
  {
    id: "rag-guide",
    title: "A Complete Guide to Retrieval-Augmented Generation (RAG)",
    date: "January 25, 2026",
    category: "Guide"
  },
  {
    id: "vector-databases",
    title: "Choosing the Right Vector Database for LLM Apps",
    date: "January 22, 2026",
    category: "Infrastructure"
  },
  {
    id: "edge-ai",
    title: "Running LLMs on Edge Devices: Challenges & Solutions",
    date: "January 20, 2026",
    category: "Edge AI"
  },
  {
    id: "multimodal-ai",
    title: "The Rise of Multimodal AI Systems in 2026",
    date: "January 18, 2026",
    category: "Research"
  },
  {
    id: "prompt-engineering",
    title: "Advanced Prompt Engineering Techniques",
    date: "January 15, 2026",
    category: "Guide"
  },
  {
    id: "agentic-workflows",
    title: "Building Agentic AI Workflows with Open Tools",
    date: "January 12, 2026",
    category: "AI Agents"
  },
  {
    id: "model-quantization",
    title: "Model Quantization Explained for Faster Inference",
    date: "January 10, 2026",
    category: "Optimization"
  },
  {
    id: "llm-security",
    title: "Securing Large Language Models in Production",
    date: "January 8, 2026",
    category: "Security"
  }
];

  return (
    <div className="blogs-wrapper">
      <div className="blogs-header">
        <h1>Community Blog & Articles</h1>
        <p>Insights, research, releases, and community contributions.</p>
      </div>

      {/* Featured Article */}
      <div
        className="featured-blog"
        onClick={() => navigate(`/blogs/${featured.id}`)}
      >
        <span className="blog-badge">{featured.category}</span>
        <h2>{featured.title}</h2>
        <p>{featured.desc}</p>
        <div className="blog-meta">
          {featured.author} • {featured.date}
        </div>
      </div>

      {/* Grid Articles */}
      <div className="blogs-grid">
        {articles.map((article) => (
          <div
            key={article.id}
            className="blog-card"
            onClick={() => navigate(`/blogs/${article.id}`)}
          >
            <span className="blog-badge">{article.category}</span>
            <h3>{article.title}</h3>
            <div className="blog-meta">{article.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;