import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BlogDetails() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/blogs/${slug}`
        );
        setContent(res.data.content);
      } catch (error) {
        setContent("Failed to load blog.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  return (
    <div className="docs-wrapper">
      <div className="docs-container">
        {loading ? (
          <p>Loading article...</p>
        ) : (
          <div className="blog-content">{content}</div>
        )}
      </div>
    </div>
  );
}

export default BlogDetails;