import { useNavigate } from "react-router-dom";

function Blogs() {
  const navigate = useNavigate();

  const blogs = [
    {
      slug: "deploying-vlm-jetson",
      title: "Deploying Open Source Vision Language Models on Jetson",
      author: "NVIDIA",
      date: "Feb 24, 2026",
      category: "Vision",
    },
    {
      slug: "ggml-llama-hf",
      title: "GGML and llama.cpp join HF to ensure long-term Local AI",
      author: "HF Team",
      date: "Feb 20, 2026",
      category: "LLM",
    },
    {
      slug: "train-ai-unsloth",
      title: "Train AI models with Unsloth and Hugging Face Jobs",
      author: "Community",
      date: "Feb 18, 2026",
      category: "Training",
    },
    {
      slug: "trl-rlhf-guide",
      title: "Understanding TRL and RLHF in Modern LLMs",
      author: "Research",
      date: "Feb 15, 2026",
      category: "Research",
    },
  ];

  return (
    <div className="docs-wrapper">
      <div className="docs-container">
        <h1 className="docs-title">Community Blog & Articles</h1>
        <p className="docs-subtitle">
          Latest updates, research, tutorials and community insights.
        </p>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="blog-card"
              onClick={() =>
                navigate(`/community/blogs/${blog.slug}`)
              }
            >
              <h3>{blog.title}</h3>
              <p>
                {blog.author} • {blog.date}
              </p>
              <p style={{ marginTop: "10px", color: "#a855f7" }}>
                {blog.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;