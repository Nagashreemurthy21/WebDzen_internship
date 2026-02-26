import { useNavigate } from "react-router-dom";

const sections = [
  {
    title: "Hub & Client Libraries",
    items: [
      { name: "Hub", slug: "hub" },
      { name: "Hub Python Library", slug: "hub-python" },
      { name: "Huggingface.js", slug: "hf-js" },
      { name: "Tasks", slug: "tasks" },
      { name: "Dataset Viewer", slug: "dataset-viewer" },
      { name: "Spaces", slug: "spaces" },
      { name: "REST API Reference", slug: "api-reference" },
      { name: "Authentication", slug: "authentication" },
      { name: "Rate Limits", slug: "rate-limits" },
    ],
  },

  {
    title: "Deployment & Inference",
    items: [
      { name: "Inference Providers", slug: "inference-providers" },
      { name: "Inference Endpoints", slug: "inference-endpoints" },
      { name: "Text Generation Inference", slug: "text-generation" },
      { name: "Text Embeddings Inference", slug: "text-embeddings" },
      { name: "Vision Inference", slug: "vision-inference" },
      { name: "Audio Inference", slug: "audio-inference" },
      { name: "Streaming Responses", slug: "streaming" },
      { name: "Batch Inference", slug: "batch-inference" },
      { name: "Deploying on AWS", slug: "aws" },
      { name: "Microsoft Azure", slug: "azure" },
      { name: "GCP Deployment", slug: "gcp" },
    ],
  },

  {
    title: "Training & Optimization",
    items: [
      { name: "Transformers", slug: "transformers" },
      { name: "Diffusers", slug: "diffusers" },
      { name: "PEFT", slug: "peft" },
      { name: "Accelerate", slug: "accelerate" },
      { name: "TRL (RLHF)", slug: "trl" },
      { name: "Fine-tuning Guide", slug: "fine-tuning" },
      { name: "LoRA Training", slug: "lora" },
      { name: "Quantization", slug: "quantization" },
      { name: "Bitsandbytes", slug: "bitsandbytes" },
      { name: "Safetensors", slug: "safetensors" },
      { name: "Multi-GPU Training", slug: "multi-gpu" },
      { name: "Distributed Training", slug: "distributed-training" },
    ],
  },

  {
    title: "Multimodal & Advanced AI",
    items: [
      { name: "Vision Models", slug: "vision-models" },
      { name: "Audio Models", slug: "audio-models" },
      { name: "Speech-to-Text", slug: "speech-to-text" },
      { name: "Text-to-Image", slug: "text-to-image" },
      { name: "Image-to-Text", slug: "image-to-text" },
      { name: "Multimodal LLMs", slug: "multimodal-llms" },
      { name: "Agents Framework", slug: "agents" },
      { name: "Tool Use", slug: "tool-use" },
    ],
  },

  {
    title: "Evaluation & Benchmarking",
    items: [
      { name: "Evaluate", slug: "evaluate" },
      { name: "Leaderboards", slug: "leaderboards" },
      { name: "LightEval", slug: "lighteval" },
      { name: "Benchmarking Guide", slug: "benchmarking" },
      { name: "Custom Metrics", slug: "custom-metrics" },
      { name: "Model Comparison", slug: "model-comparison" },
    ],
  },

  {
    title: "Collaboration & Ecosystem",
    items: [
      { name: "Gradio", slug: "gradio" },
      { name: "AutoTrain", slug: "autotrain" },
      { name: "Trackio", slug: "trackio" },
      { name: "Chat UI", slug: "chat-ui" },
      { name: "Distilabel", slug: "distilabel" },
      { name: "Community Spaces", slug: "community-spaces" },
      { name: "Model Cards", slug: "model-cards" },
      { name: "Dataset Cards", slug: "dataset-cards" },
    ],
  },

  {
    title: "Enterprise & Scaling",
    items: [
      { name: "Enterprise Hub", slug: "enterprise-hub" },
      { name: "Private Models", slug: "private-models" },
      { name: "Team Management", slug: "team-management" },
      { name: "Access Control", slug: "access-control" },
      { name: "Monitoring & Logs", slug: "monitoring" },
      { name: "Scaling Inference", slug: "scaling" },
      { name: "SLA & Security", slug: "security" },
      { name: "Compliance", slug: "compliance" },
    ],
  },
];

function Docs() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "50px 60px" }}>
      <h1 style={{ marginBottom: "50px", fontSize: "32px" }}>
        Documentation
      </h1>

      {sections.map((section, index) => (
        <div key={index} style={{ marginBottom: "70px" }}>
          <h2
            style={{
              marginBottom: "25px",
              borderBottom: "1px solid #1e293b",
              paddingBottom: "10px",
              fontSize: "20px",
            }}
          >
            {section.title}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {section.items.map((item, i) => (
              <div
                key={i}
                onClick={() => navigate(`/docs/${item.slug}`)}
                style={{
                  background: "#111827",
                  padding: "18px",
                  borderRadius: "14px",
                  border: "1px solid #1e293b",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#7c3aed";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(124,58,237,0.3)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1e293b";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <h4 style={{ fontSize: "15px" }}>{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Docs;