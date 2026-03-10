import { useNavigate } from "react-router-dom";

function TextGeneration() {
  const navigate = useNavigate();

  const models = [
    {
      id: "llama-3-70b",
      name: "Llama 3 70B",
      desc: "State-of-the-art open LLM optimized for reasoning and chat applications.",
      rating: 4.7,
    },
    {
      id: "llama-3-8b",
      name: "Llama 3 8B",
      desc: "Efficient LLM suitable for fast inference and lightweight deployments.",
      rating: 4.6,
    },
    {
      id: "mistral-7b",
      name: "Mistral 7B Instruct",
      desc: "Instruction-tuned model built for fast and accurate responses.",
      rating: 4.8,
    },
    {
      id: "mixtral-8x7b",
      name: "Mixtral 8x7B",
      desc: "Sparse Mixture-of-Experts model delivering strong performance at lower cost.",
      rating: 4.9,
    },
    {
      id: "gpt-neox-20b",
      name: "GPT-NeoX 20B",
      desc: "Open-source transformer model for advanced text generation.",
      rating: 4.6,
    },
    {
      id: "falcon-40b",
      name: "Falcon 40B",
      desc: "High-capacity multilingual LLM for scalable AI systems.",
      rating: 4.7,
    },
    {
      id: "phi-3-mini",
      name: "Phi-3 Mini",
      desc: "Compact, production-ready language model optimized for low latency.",
      rating: 4.8,
    },
    {
      id: "phi-3-medium",
      name: "Phi-3 Medium",
      desc: "Balanced performance and efficiency for enterprise AI workloads.",
      rating: 4.7,
    },
    {
      id: "gemma-7b",
      name: "Gemma 7B",
      desc: "High-quality open language model from Google for research and production.",
      rating: 4.9,
    },
    {
      id: "gemma-2b",
      name: "Gemma 2B",
      desc: "Lightweight and fast model suitable for edge AI deployments.",
      rating: 4.5,
    },
    {
      id: "deepseek-llm",
      name: "DeepSeek LLM",
      desc: "Advanced reasoning model designed for technical and math tasks.",
      rating: 4.8,
    },
    {
      id: "command-r",
      name: "Command R",
      desc: "Retrieval-augmented generation model for enterprise search and QA.",
      rating: 4.7,
    },
    {
      id: "zephyr-7b",
      name: "Zephyr 7B",
      desc: "Alignment-optimized chat model fine-tuned for conversational AI.",
      rating: 4.6,
    },
    {
      id: "orca-2",
      name: "Orca 2",
      desc: "Research LLM trained with advanced reasoning and explanation data.",
      rating: 4.7,
    },
    {
      id: "nous-hermes-2",
      name: "Nous Hermes 2",
      desc: "Community fine-tuned conversational model with strong alignment.",
      rating: 4.8,
    },
  ];

  return (
    <div className="task-page">
      <div className="task-header">
        <h1>Text Generation Models</h1>
        <p>Large language models for chat, reasoning and completion.</p>
      </div>

      <div className="task-grid">
        {models.map((model) => (
          <div
            key={model.id}
            className="task-card"
            onClick={() => navigate(`/model/${model.id}`)}
          >
            <div className="task-top">
              <span className="task-badge">LLM</span>
              <span className="task-rating">★ {model.rating}</span>
            </div>

            <h3>{model.name}</h3>
            <p>{model.desc}</p>

            <button className="task-btn">Open Model →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TextGeneration;