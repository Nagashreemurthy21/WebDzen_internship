import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function DocDetails() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `http://localhost:5000/api/docs/${slug}`
        );

        if (res.data.success) {
          setContent(res.data.content);
        } else {
          setContent("Failed to load documentation.");
        }

      } catch (error) {
        console.error("Error loading docs:", error);
        setContent("Failed to load documentation.");
      } finally {
        setLoading(false);
      }
    };

    fetchDocs();
  }, [slug]);

  return (
    <div style={{ padding: "40px 60px", maxWidth: "1000px" }}>
      {loading ? (
        <h2>Loading documentation...</h2>
      ) : (
        <ReactMarkdown>{content}</ReactMarkdown>
      )}
    </div>
  );
}

export default DocDetails;