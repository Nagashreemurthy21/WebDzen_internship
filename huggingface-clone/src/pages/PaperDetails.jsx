import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function PaperDetails() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/papers/${id}`
        );

        setContent(res.data.content);
      } catch (err) {
        setContent("Failed to load paper.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div style={{ padding: "60px", maxWidth: "900px", margin: "auto" }}>
      {loading ? <h2>Loading...</h2> : <ReactMarkdown>{content}</ReactMarkdown>}
    </div>
  );
}

export default PaperDetails;