function Pricing() {
  return (
    <div className="page-wrapper">

      <h1 className="page-title">Pricing</h1>
      <p className="page-description">
        Choose a plan that fits your AI development needs.
      </p>

      <div className="card-grid">

        <div className="dataset-card">
          <h3>Free</h3>
          <p>$0/month</p>
          <p>Basic API access</p>
        </div>

        <div className="dataset-card">
          <h3>Pro</h3>
          <p>$29/month</p>
          <p>Unlimited requests</p>
        </div>

        <div className="dataset-card">
          <h3>Enterprise</h3>
          <p>Custom pricing</p>
          <p>Dedicated hosting</p>
        </div>

      </div>

    </div>
  );
}
export default Pricing;