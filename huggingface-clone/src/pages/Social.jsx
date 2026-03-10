import { useNavigate } from "react-router-dom";

function Social() {
  const navigate = useNavigate();

  const posts = [
  {
    id: "mistral-lora",
    user: "@nagashree_ai",
    content: "🚀 Just fine-tuned Mistral 7B using LoRA in under 30 minutes!",
    likes: 124,
    comments: 12,
    time: "2 hours ago"
  },
  {
    id: "llama-chatbot",
    user: "@ai_builder",
    content: "🔥 Built a medical chatbot using LLaMA 3 + HF Inference API.",
    likes: 98,
    comments: 8,
    time: "5 hours ago"
  },
  {
    id: "sd-anime",
    user: "@vision_dev",
    content: "🎨 Sharing my Stable Diffusion anime model checkpoint.",
    likes: 210,
    comments: 21,
    time: "1 day ago"
  },
  {
    id: "whisper-kannada",
    user: "@speech_lab",
    content: "👏 Whisper v3 works insanely well for Kannada speech!",
    likes: 76,
    comments: 5,
    time: "2 days ago"
  },
  {
    id: "rag-stack",
    user: "@llm_engineer",
    content: "📚 Built a full RAG stack with vector DB + open-source LLM.",
    likes: 143,
    comments: 17,
    time: "3 days ago"
  },
  {
    id: "edge-ai",
    user: "@edge_dev",
    content: "⚡ Running quantized LLaMA on Raspberry Pi 5!",
    likes: 88,
    comments: 9,
    time: "4 days ago"
  },
  {
    id: "agent-workflow",
    user: "@agent_creator",
    content: "🤖 Multi-agent workflow built using open tools.",
    likes: 167,
    comments: 22,
    time: "5 days ago"
  },
  {
    id: "vision-language",
    user: "@vlm_research",
    content: "🖼️ Vision-Language models outperform pure LLMs in multimodal tasks.",
    likes: 201,
    comments: 31,
    time: "6 days ago"
  },
  {
    id: "fine-tune-bert",
    user: "@nlp_student",
    content: "📊 Fine-tuned BERT for sentiment analysis in 20 mins.",
    likes: 54,
    comments: 6,
    time: "1 week ago"
  },
  {
    id: "stable-diffusion-ui",
    user: "@ui_dev",
    content: "🎨 Built a custom UI for Stable Diffusion with React.",
    likes: 133,
    comments: 14,
    time: "1 week ago"
  },
  {
    id: "dataset-release",
    user: "@data_lab",
    content: "📂 Released new multilingual dataset for ASR research.",
    likes: 89,
    comments: 11,
    time: "1 week ago"
  },
  {
    id: "ai-security",
    user: "@sec_engineer",
    content: "🔐 Protecting LLM APIs from prompt injection attacks.",
    likes: 112,
    comments: 13,
    time: "2 weeks ago"
  }
];

  return (
    <div className="community-wrapper">
      <div className="community-header">
        <h1>Community Social Posts</h1>
        <p>Real conversations happening across the AI ecosystem.</p>
      </div>

      <div className="social-grid">
        {posts.map((post) => (
          <div
            key={post.id}
            className="social-card"
            onClick={() => navigate(`/social/${post.id}`)}
          >
            <div className="social-user">{post.user}</div>
            <p className="social-content">{post.content}</p>
            <div className="social-meta">
              ❤️ {post.likes} &nbsp;&nbsp; 💬 {post.comments}
              <span>{post.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Social;