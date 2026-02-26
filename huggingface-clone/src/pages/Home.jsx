const Home = () => {
  return (
    <div className="home-center">
      <h1>Welcome to HuggingFace Clone</h1>
      <p className="home-subtitle">
        Explore models, datasets, spaces and build AI-powered applications.
      </p>

      <div className="home-buttons">
        <a href="/models" className="primary-btn">Explore Models</a>
        <a href="/playground" className="secondary-btn">Try AI Playground</a>
      </div>

      <div className="home-stats">
        <div>
          <h3>10+</h3>
          <p>AI Models</p>
        </div>
        <div>
          <h3>5+</h3>
          <p>Datasets</p>
        </div>
        <div>
          <h3>Real-time</h3>
          <p>AI Inference</p>
        </div>
      </div>
    </div>
  );
};

export default Home;