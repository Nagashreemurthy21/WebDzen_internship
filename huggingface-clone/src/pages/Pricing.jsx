function Pricing() {
  return (
    <div className="pricing-wrapper">

      <div className="pricing-header">
        <h1>Simple & Transparent Pricing</h1>
        <p>Choose the perfect plan to power your AI development journey.</p>
      </div>

      <div className="pricing-grid">

        {/* FREE */}
        <div className="pricing-card">
          <h3>Free</h3>
          <h2>$0<span>/month</span></h2>
          <ul>
            <li>✓ Basic API Access</li>
            <li>✓ Community Support</li>
            <li>✓ Limited Requests</li>
            <li>✓ Public Models Access</li>
          </ul>
          <button className="pricing-btn">Get Started</button>
        </div>

        {/* PRO */}
        <div className="pricing-card popular">
          <div className="popular-badge">Most Popular</div>
          <h3>Pro</h3>
          <h2>$29<span>/month</span></h2>
          <ul>
            <li>✓ Unlimited API Requests</li>
            <li>✓ Priority Support</li>
            <li>✓ Advanced Analytics</li>
            <li>✓ Private Model Hosting</li>
            <li>✓ Early Feature Access</li>
          </ul>
          <button className="pricing-btn primary-btn">Upgrade Now</button>
        </div>

        {/* ENTERPRISE */}
        <div className="pricing-card">
          <h3>Enterprise</h3>
          <h2>Custom</h2>
          <ul>
            <li>✓ Dedicated Infrastructure</li>
            <li>✓ Custom Integrations</li>
            <li>✓ SLA & 24/7 Support</li>
            <li>✓ SOC2 Compliance</li>
            <li>✓ Role-Based Access Control</li>
          </ul>
          <button className="pricing-btn">Contact Sales</button>
        </div>

      </div>

      {/* WHY SECTION */}
      <div className="pricing-why">
        <h2>Why Choose Our Platform?</h2>
        <div className="why-grid">
          <div>
            <h4>⚡ High Performance</h4>
            <p>Optimized infrastructure for real-time AI inference.</p>
          </div>
          <div>
            <h4>🔐 Enterprise Security</h4>
            <p>End-to-end encryption and compliance-ready systems.</p>
          </div>
          <div>
            <h4>📈 Scalable</h4>
            <p>Scale from startup to enterprise effortlessly.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Pricing;