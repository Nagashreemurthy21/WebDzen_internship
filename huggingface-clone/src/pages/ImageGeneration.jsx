import { useState } from "react";
import axios from "axios";

function ImageGeneration() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt) return;

    try {
      setLoading(true);
      setImage("");

      const res = await axios.post(
        "http://localhost:5000/generate-image",
        { prompt }
      );

      setImage(res.data.image);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎨 Image Generation</h1>

        <textarea
          style={styles.textarea}
          placeholder="Describe your image... (e.g., dog in space)"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          style={loading ? styles.buttonDisabled : styles.button}
          onClick={generateImage}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>

        {image && (
          <div style={styles.imageContainer}>
            <img
              src={image}
              alt="Generated"
              style={styles.image}
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/800x500?text=Image+Unavailable";
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "60px 20px",
  },

  card: {
    width: "900px",
    background: "linear-gradient(145deg, #0f172a, #1e293b)",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
  },

  title: {
    fontSize: "36px",
    marginBottom: "25px",
    color: "white",
  },

  textarea: {
    width: "100%",
    height: "120px",
    padding: "18px",
    borderRadius: "14px",
    border: "1px solid #334155",
    background: "#0f172a",
    color: "white",
    fontSize: "18px",
    marginBottom: "20px",
    outline: "none",
  },

  button: {
    padding: "14px 28px",
    fontSize: "18px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    color: "white",
    cursor: "pointer",
  },

  buttonDisabled: {
    padding: "14px 28px",
    fontSize: "18px",
    borderRadius: "12px",
    border: "none",
    background: "#475569",
    color: "white",
  },

  imageContainer: {
    marginTop: "40px",
    textAlign: "center",
  },

  image: {
    width: "100%",
    maxWidth: "700px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
  },
};

export default ImageGeneration;