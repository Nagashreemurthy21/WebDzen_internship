// src/pages/Enterprise.jsx

import { useNavigate } from "react-router-dom";

function Enterprise() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Private Hosting",
      desc: "Deploy AI models securely in your private cloud or on-prem infrastructure with full control and compliance."
    },
    {
      title: "Team Collaboration",
      desc: "Role-based access control, shared workspaces and enterprise collaboration workflows."
    },
    {
      title: "Advanced Analytics",
      desc: "Real-time monitoring, usage insights, cost optimization and inference metrics."
    },
    {
      title: "Security & Compliance",
      desc: "SOC2-ready infrastructure, GDPR compliance and enterprise-grade security."
    },
    {
      title: "Custom Integrations",
      desc: "API integrations tailored for ERP, CRM and internal enterprise tools."
    },
    {
      title: "Dedicated Support",
      desc: "24/7 enterprise support with onboarding assistance and SLA guarantees."
    }
  ];

  return (
    <div className="enterprise-wrapper">
      
      {/* HERO */}
      <div className="enterprise-hero">
        <h1>Enterprise AI Infrastructure</h1>
        <p>
          Secure, scalable, production-ready AI solutions for organizations
          building the future with advanced machine learning systems.
        </p>

        <div className="enterprise-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/enterprise-details")}
          >
            Request Demo
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/pricing")}
          >
            Contact Sales
          </button>
        </div>
      </div>

      {/* FEATURES GRID */}
      <div className="enterprise-grid">
        {features.map((feature, index) => (
          <div key={index} className="enterprise-card">
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* SECURITY SECTION */}
      <div className="enterprise-security">
        <h2>Enterprise-Grade Security</h2>
        <ul>
          <li>✔ End-to-End Encryption</li>
          <li>✔ Dedicated Infrastructure</li>
          <li>✔ Role-Based Access Control</li>
          <li>✔ Audit Logs & Monitoring</li>
        </ul>
      </div>

      {/* FINAL CTA */}
      <div className="enterprise-cta">
        <h2>Ready to Scale AI in Your Organization?</h2>
        <p>Partner with us to deploy production-ready AI systems at scale.</p>
        <button
          className="primary-btn"
          onClick={() => navigate("/enterprise-details")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Enterprise;