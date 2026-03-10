import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./ModelDetails.css";

function ModelDetails() {
  const { slug } = useParams();

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const isImageModel =
    slug.includes("diffusion") ||
    slug.includes("image") ||
    slug.includes("stable");

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setResult("");

      if (isImageModel) {
        const res = await axios.post(
          "http://localhost:5000/api/image",
          { prompt }
        );

        setResult(res.data.image); // base64 image
      } else {
        const res = await axios.post(
          "http://localhost:5000/api/text",
          { prompt }
        );

        setResult(res.data.result);
      }
    } catch (err) {
      console.error(err);
      setResult("Error generating response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="model-playground">
      <h1>{slug}</h1>

      <textarea
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={handleGenerate}>
        {loading ? "Generating..." : "Generate"}
      </button>

      <div className="output">
        {result &&
          (isImageModel ? (
            <img src={result} alt="Generated" />
          ) : (
            <p>{result}</p>
          ))}
      </div>
    </div>
  );
}

export default ModelDetails;