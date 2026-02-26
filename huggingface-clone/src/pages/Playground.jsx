import { useState } from "react";

const Playground = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState("mistralai/mistral-7b-instruct");

  const generateResponse = async () => {
    if (!prompt) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt,
          model: selectedModel
        })
      });

      const data = await res.json();
      setResponse(data.choices[0].message.content);
    } catch (err) {
      setResponse("Error generating response.");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>AI Playground</h1>

      <select
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
        style={{ marginBottom: "20px" }}
      >
        <option value="mistralai/mistral-7b-instruct">
          Mistral 7B
        </option>
        <option value="meta-llama/llama-3-8b-instruct">
          Llama 3 8B
        </option>
        <option value="openai/gpt-4o-mini">
          GPT-4o Mini
        </option>
      </select>

      <textarea
        rows="6"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt..."
        style={{ width: "100%", padding: "10px" }}
      />

      <button
        onClick={generateResponse}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        Generate
      </button>

      {loading && <p>Generating...</p>}

      {response && (
        <div style={{ marginTop: "30px" }}>
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Playground;