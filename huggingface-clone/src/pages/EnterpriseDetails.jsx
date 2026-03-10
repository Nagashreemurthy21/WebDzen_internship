// src/pages/EnterpriseDetails.jsx

import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function EnterpriseDetails() {
  const [company, setCompany] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [useCase, setUseCase] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const generateProposal = async () => {
    if (!company || !teamSize || !useCase) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/enterprise",
        {
          company,
          teamSize,
          useCase
        }
      );

      setContent(res.data.content);
    } catch (error) {
      console.error("Enterprise Error:", error);
      setContent("⚠ Failed to generate enterprise proposal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="enterprise-wrapper">

      <div className="enterprise-hero">
        <h1>Enterprise AI Proposal</h1>
        <p>
          Generate a customized AI infrastructure plan tailored to your organization’s needs.
        </p>
      </div>

      <div className="enterprise-grid">

        {/* FORM CARD */}
        <div className="enterprise-card">
          <h3>Company Information</h3>

          <div className="enterprise-form">
            <input
              type="text"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />

            <input
              type="text"
              placeholder="Team Size (e.g. 500)"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
            />

            <textarea
              placeholder="Primary Use Case"
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
            />

            <button
              className="primary-btn"
              onClick={generateProposal}
            >
              {loading ? "Generating Proposal..." : "Generate Proposal"}
            </button>
          </div>
        </div>

        {/* RESULT CARD */}
        {content && (
          <div className="enterprise-card">
            <h3>Generated Proposal</h3>
            <div className="enterprise-result">
              {loading ? (
                <p>Generating AI-powered enterprise plan...</p>
              ) : (
                <ReactMarkdown>{content}</ReactMarkdown>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default EnterpriseDetails;