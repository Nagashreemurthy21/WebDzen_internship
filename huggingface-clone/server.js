import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Groq Backend Running 🚀" });
});

/* ============================= */
/* GROQ TEXT GENERATION */
/* ============================= */

app.post("/api/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to generate response" });
  }
});

/* ============================= */
/* DOCUMENTATION API */
/* ============================= */

app.get("/api/docs/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const prompt = `
Give professional documentation for "${slug}" from Hugging Face platform.

Structure it in Markdown format:

# Title
## Overview
## Key Features
## Installation
## Usage Example
## When to Use
`;

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ content: response.data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "Failed to load documentation" });
  }
});

/* ============================= */
/* BLOG API (NEW) */
/* ============================= */

app.get("/api/blog/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const prompt = `
Write a professional Hugging Face blog article about "${slug}".

Structure:
# Title
## Introduction
## Main Content
## Code Examples
## Conclusion
`;

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ content: response.data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "Failed to load blog" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));