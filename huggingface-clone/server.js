import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import fs from "fs";
import FormData from "form-data";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

/* ========================================= */
/* TEXT GENERATION (Groq) */
/* ========================================= */

app.post("/api/text", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
      }
    );

    res.json({
      result: response.data.choices[0].message.content,
    });
  } catch (error) {
    console.log("TEXT ERROR:", error.response?.data || error.message);
    res.status(500).json({ error: "Text generation failed" });
  }
});

/* ========================================= */
/* IMAGE GENERATION (Unsplash AI) */
/* ========================================= */

app.post("/generate-image", async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await axios.get(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          query: prompt,
          per_page: 1
        },
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
        }
      }
    );

    const imageUrl = response.data.results[0].urls.regular;

    res.json({ image: imageUrl });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Image generation failed" });
  }
});
/* ========================================= */
/* AUDIO PROCESSING (Groq Whisper) */
/* ========================================= */

const upload = multer({ dest: "uploads/" });

app.post("/api/audio", upload.single("audio"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.path;

    const formData = new FormData();
    formData.append(
      "file",
      fs.createReadStream(filePath),
      {
        filename: req.file.originalname,
        contentType: req.file.mimetype
      }
    );

    formData.append("model", "whisper-large-v3");

    const response = await axios.post(
      "https://api.groq.com/openai/v1/audio/transcriptions",
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        maxBodyLength: Infinity,
      }
    );

    fs.unlinkSync(filePath);

    res.json({ text: response.data.text });

  } catch (error) {
    console.log("AUDIO ERROR:", error.response?.data || error.message);
    res.status(500).json({ error: "Audio transcription failed" });
  }
});

/* ========================================= */
/* VIDEO AI (Demo Working Version) */
/* ========================================= */

app.post("/api/video", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    console.log("Video Prompt:", prompt);

    res.json({
      video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    });

  } catch (error) {
    console.log("VIDEO ERROR:", error.message);
    res.status(500).json({ error: "Video generation failed" });
  }
});

/* ========================================= */
/* DATASET DETAILS (Groq AI) */
/* ========================================= */

app.post("/api/dataset-details", async (req, res) => {
  try {
    const { dataset } = req.body;

    if (!dataset) {
      return res.status(400).json({ error: "Dataset name is required" });
    }

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: "You are an AI assistant that provides structured dataset information."
          },
          {
            role: "user",
            content: `
Give detailed information about the dataset "${dataset}" in this format:

1. Description
2. Size
3. License
4. Use Cases
5. Popularity
6. Example Applications

Keep it clean and well formatted.
`
          }
        ],
        temperature: 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`
        }
      }
    );

    res.json({
      success: true,
      content: response.data.choices[0].message.content
    });

  } catch (error) {
    console.error("DATASET ERROR:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      error: "Failed to generate dataset information"
    });
  }
});
/* ========================================= */
/* DOCUMENTATION (Groq AI) */
/* ========================================= */

/* ========================================= */
/* DOCUMENTATION DETAILS (Groq AI) */
/* ========================================= */

app.get("/api/docs/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    if (!slug) {
      return res.status(400).json({ error: "Slug is required" });
    }

    const topic = slug.replace(/-/g, " ");

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: "You are a professional technical documentation writer."
          },
          {
            role: "user",
            content: `
Generate clean, structured documentation for "${topic}".

Use proper markdown formatting.

Include:
# Title
## Overview
## Installation
## Usage
## Code Example
## Best Practices
## Summary

Make it developer-friendly and well formatted.
`
          }
        ],
        temperature: 0.6
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`
        }
      }
    );

    res.json({
      success: true,
      content: response.data.choices[0].message.content
    });

  } catch (error) {
    console.error("DOCS ERROR:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      content: "Failed to load documentation."
    });
  }
});
/* ========================================= */
/* BLOG DETAILS (Groq AI) */
/* ========================================= */

app.get("/api/blog/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Blog ID is required" });
    }

    const topic = id.replace(/-/g, " ");

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: "You are a professional AI blog writer."
          },
          {
            role: "user",
            content: `
Write a detailed blog article about "${topic}".

Use proper markdown formatting.

Include:
# Title
## Introduction
## Main Concepts
## Technical Breakdown
## Real-world Applications
## Future Scope
## Conclusion

Make it engaging and informative.
`
          }
        ],
        temperature: 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`
        }
      }
    );

    res.json({
      success: true,
      content: response.data.choices[0].message.content
    });

  } catch (error) {
    console.error("BLOG ERROR:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      content: "Failed to load blog article."
    });
  }
});
/* ========================================= */
/* SOCIAL POSTS (Groq AI) */
/* ========================================= */

app.get("/api/social/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Post ID is required" });
    }

    const topic = id.replace(/-/g, " ");

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: "You are a social media AI content creator."
          },
          {
            role: "user",
            content: `
Generate a professional social media post about "${topic}".

Include:
- Engaging headline
- Short description
- Bullet highlights
- Hashtags
- Call to action

Keep it concise and platform-friendly.
`
          }
        ],
        temperature: 0.8
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`
        }
      }
    );

    res.json({
      success: true,
      content: response.data.choices[0].message.content
    });

  } catch (error) {
    console.error("SOCIAL ERROR:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      content: "Failed to generate social post."
    });
  }
});
/* ========================================= */
/* DAILY PAPERS (Groq AI) */
/* ========================================= */

app.get("/api/papers/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Paper ID is required" });
    }

    const topic = id.replace(/-/g, " ");

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: "You are a research paper summarizer and analyst."
          },
          {
            role: "user",
            content: `
Generate a research-style daily AI paper summary for "${topic}".

Include:
# Title
## Abstract
## Methodology
## Key Findings
## Technical Insights
## Applications
## Limitations
## Conclusion

Use academic tone and markdown formatting.
`
          }
        ],
        temperature: 0.6
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`
        }
      }
    );

    res.json({
      success: true,
      content: response.data.choices[0].message.content
    });

  } catch (error) {
    console.error("PAPER ERROR:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      content: "Failed to generate paper."
    });
  }
});
/* ========================================= */
/* ENTERPRISE SOLUTIONS (Groq AI - Improved) */
/* ========================================= */

app.post("/api/enterprise", async (req, res) => {
  try {
    const { company, useCase, teamSize } = req.body;

    // Basic validation
    if (!company || !useCase || !teamSize) {
      return res.status(400).json({
        success: false,
        content: "Company name, team size, and use case are required."
      });
    }

    const prompt = `
You are a senior enterprise AI solutions architect.

Create a professional, production-ready enterprise AI proposal for:

Company Name: ${company}
Team Size: ${teamSize} employees
Primary Use Case: ${useCase}

Structure the response in clean markdown format with the following sections:

# Enterprise AI Proposal for ${company}

## 1. Executive Summary
Explain business goals and AI transformation value.

## 2. Recommended Infrastructure
- Cloud or Hybrid architecture
- GPU clusters
- Inference endpoints
- Model hosting strategy

## 3. Security & Compliance
- Encryption
- Role-Based Access Control
- Audit logs
- GDPR / SOC2 readiness

## 4. Deployment Strategy
Step-by-step rollout plan.

## 5. Pricing Tier Recommendation
Suggest Startup / Growth / Enterprise tier with reasoning.

## 6. Implementation Timeline
Clear timeline in weeks.

## 7. Support & SLA
24/7 support, dedicated manager, monitoring.

Make it executive-level, professional, and enterprise-grade.
`;

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: "You are an expert enterprise AI architect and SaaS consultant."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.6
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({
      success: true,
      content: response.data.choices[0].message.content
    });

  } catch (error) {
    console.error("ENTERPRISE ERROR:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      content: "Failed to generate enterprise proposal. Please try again."
    });
  }
});
/* ========================================= */
/* AI AGENTS (Groq AI) */
/* ========================================= */

app.post("/api/agent", async (req, res) => {
  try {
    const { agentName } = req.body;

    if (!agentName) {
      return res.status(400).json({
        success: false,
        content: "Agent name is required."
      });
    }

    const prompt = `
You are an advanced AI systems architect.

Generate a complete AI agent blueprint for: ${agentName}

Structure the response in markdown:

# ${agentName.toUpperCase()} AI Agent

## Overview
Explain what this agent does.

## Architecture
Describe components (LLM, memory, tools, planner).

## Workflow
Step-by-step execution pipeline.

## Tech Stack
Recommended models and frameworks.

## Use Cases
Practical applications.

## Limitations
Constraints and challenges.

Make it professional and technical.
`;

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: "You are an AI agent architect." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({
      success: true,
      content: response.data.choices[0].message.content
    });

  } catch (error) {
    console.error("AGENT ERROR:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      content: "Failed to generate AI agent."
    });
  }
});
/* ========================================= */
/* MODELS LIST */
/* ========================================= */

/* ========================================= */
/* MODELS LIST */
/* ========================================= */

app.get("/api/models", (req, res) => {
  res.json([
    {
      id: "gpt-2",
      name: "GPT-2",
      category: "Text Generation",
      description: "Open-source transformer model for natural language generation tasks.",
      rating: "4.5"
    },
    {
      id: "llama-3-8b",
      name: "LLaMA 3 8B",
      category: "Text Generation",
      description: "Meta's advanced large language model optimized for fast inference.",
      rating: "4.9"
    },
    {
      id: "mistral-7b",
      name: "Mistral 7B",
      category: "Text Generation",
      description: "Lightweight high-performance LLM for production deployments.",
      rating: "4.7"
    },
    {
      id: "bert-base",
      name: "BERT Base",
      category: "NLP",
      description: "Bidirectional encoder for text classification and understanding.",
      rating: "4.3"
    },
    {
      id: "t5-large",
      name: "T5 Large",
      category: "Text-to-Text",
      description: "Text-to-text transfer transformer for translation and summarization.",
      rating: "4.6"
    },
    {
      id: "stable-diffusion",
      name: "Stable Diffusion",
      category: "Image Generation",
      description: "High-quality AI image generation model.",
      rating: "4.8"
    },
    {
      id: "sdxl",
      name: "SDXL",
      category: "Image Generation",
      description: "Next-generation Stable Diffusion XL model for enhanced realism.",
      rating: "4.9"
    },
    {
      id: "dalle-mini",
      name: "DALL·E Mini",
      category: "Image Generation",
      description: "Generates creative images from textual prompts.",
      rating: "4.2"
    },
    {
      id: "whisper-large",
      name: "Whisper Large",
      category: "Audio Processing",
      description: "Speech-to-text transcription model supporting multiple languages.",
      rating: "4.6"
    },
    {
      id: "wav2vec-2",
      name: "Wav2Vec 2.0",
      category: "Audio Processing",
      description: "Self-supervised speech representation learning model.",
      rating: "4.4"
    },
    {
      id: "clip-vit",
      name: "CLIP ViT",
      category: "Vision-Language",
      description: "Connects images and text in a shared embedding space.",
      rating: "4.6"
    },
    {
      id: "segment-anything",
      name: "Segment Anything",
      category: "Computer Vision",
      description: "Meta’s powerful image segmentation foundation model.",
      rating: "4.7"
    },
    {
      id: "yolov8",
      name: "YOLOv8",
      category: "Object Detection",
      description: "Real-time object detection model optimized for speed and accuracy.",
      rating: "4.5"
    },
    {
      id: "resnet-50",
      name: "ResNet-50",
      category: "Image Classification",
      description: "Deep residual network for high-accuracy image recognition.",
      rating: "4.4"
    },
    {
      id: "falcon-40b",
      name: "Falcon 40B",
      category: "Text Generation",
      description: "Large open-source LLM with strong reasoning capabilities.",
      rating: "4.8"
    }
  ]);
});

/* ========================================= */
/* ROOT */
/* ========================================= */

app.get("/", (req, res) => {
  res.json({ message: "AI Playground Backend Running 🚀" });
});

/* ========================================= */
/* START SERVER */
/* ========================================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});