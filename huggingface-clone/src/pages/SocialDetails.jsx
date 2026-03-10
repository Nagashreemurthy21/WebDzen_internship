import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function SocialDetails() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/social/${id}`
        );

        setContent(res.data.content);
      } catch (err) {
        setContent("Failed to load social post.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div style={{ padding: "60px", maxWidth: "800px", margin: "auto" }}>
      {loading ? <h2>Loading...</h2> : <ReactMarkdown>{content}</ReactMarkdown>}
    </div>
  );
}

export default SocialDetails;