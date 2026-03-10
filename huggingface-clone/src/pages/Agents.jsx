import { useNavigate } from "react-router-dom";

function Agents() {
  const navigate = useNavigate();

  const agents = [
    {
      id: "autogpt",
      name: "AutoGPT",
      desc: "Autonomous goal-driven AI agent capable of planning, reasoning and executing complex tasks.",
      category: "Autonomous"
    },
    {
      id: "babyagi",
      name: "BabyAGI",
      desc: "Task-driven AI agent with memory and prioritization loop for iterative execution.",
      category: "Memory-Based"
    },
    {
      id: "crewai",
      name: "CrewAI",
      desc: "Multi-agent collaboration framework for structured AI teamwork.",
      category: "Multi-Agent"
    },
    {
      id: "devin",
      name: "Devin AI",
      desc: "AI software engineer capable of writing, debugging and deploying code autonomously.",
      category: "Developer Agent"
    },
    {
      id: "research-agent",
      name: "Research Agent",
      desc: "Autonomous AI agent for gathering, summarizing and analyzing research data.",
      category: "Research"
    },
    {
      id: "trading-agent",
      name: "Trading Agent",
      desc: "AI-powered financial agent capable of market analysis and strategy execution.",
      category: "Finance"
    }
  ];

  return (
    <div className="agents-wrapper">
      
      {/* HERO */}
      <div className="agents-hero">
        <h1>AI Agents Hub</h1>
        <p>
          Discover autonomous AI systems capable of planning, reasoning,
          executing and collaborating across complex workflows.
        </p>
      </div>

      {/* GRID */}
      <div className="agents-grid">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="agent-card"
            onClick={() => navigate(`/ai-agents/${agent.id}`)}
          >
            <div className="agent-category">{agent.category}</div>
            <h3>{agent.name}</h3>
            <p>{agent.desc}</p>

            <div className="agent-footer">
              <span>View Architecture →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Agents;