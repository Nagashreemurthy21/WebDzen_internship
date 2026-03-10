import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function BlogDetails() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/blog/${id}`
        );

        if (res.data.success) {
          setContent(res.data.content);
        } else {
          setContent("Failed to load blog.");
        }

      } catch (error) {
        console.error(error);
        setContent("Failed to load blog.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div style={{ padding: "60px", maxWidth: "900px", margin: "auto" }}>
      {loading ? (
        <h2>Loading blog...</h2>
      ) : (
        <ReactMarkdown>{content}</ReactMarkdown>
      )}
    </div>
  );
}

export default BlogDetails;