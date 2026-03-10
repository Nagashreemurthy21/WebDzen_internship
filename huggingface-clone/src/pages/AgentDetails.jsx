import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function AgentDetails() {
  const { slug } = useParams();

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    generateAgent();
  }, [slug]);

  const generateAgent = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/agent",
        {
          agentName: slug
        }
      );

      setContent(res.data.content);
    } catch (error) {
      console.error("Agent error:", error);
      setContent("Failed to generate AI agent.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="enterprise-wrapper">
      <div className="enterprise-hero">
        <h1>{slug.toUpperCase()} AI Agent</h1>
        <p>Generating intelligent autonomous agent architecture...</p>
      </div>

      <div className="enterprise-card">
        {loading ? (
          <p>⚡ Building AI Agent...</p>
        ) : (
          <ReactMarkdown>{content}</ReactMarkdown>
        )}
      </div>
    </div>
  );
}

export default AgentDetails;