import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Models() {
  const [models, setModels] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  useEffect(() => {
    async function fetchModels() {
      try {
        const res = await axios.get("http://localhost:5000/api/models");
        setModels(res.data);
        setFilteredModels(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load models. Please try again.");
        setLoading(false);
      }
    }

    fetchModels();
  }, []);

  useEffect(() => {
    let temp = [...models];

    // Search
    if (search) {
      temp = temp.filter((model) =>
        model.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category Filter
    if (category !== "All") {
      temp = temp.filter((model) => model.category === category);
    }

    // Sort
    if (sort === "rating-high") {
      temp.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    }

    if (sort === "rating-low") {
      temp.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
    }

    setFilteredModels(temp);
  }, [search, category, sort, models]);

  if (loading) return <div className="loading">Loading models...</div>;
  if (error) return <div className="error">{error}</div>;

  const categories = ["All", ...new Set(models.map((m) => m.category))];

  return (
  <div className="models-wrapper">
    <div className="models-box">
      <div className="models-header">
        <h1>Explore AI Models</h1>
        <p>
          Discover powerful AI models across text, vision, and audio domains.
        </p>
      </div>

      {/* Controls */}
      <div className="models-controls">
        <input
          type="text"
          placeholder="Search models..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="filter-select"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="filter-select"
        >
          <option value="default">Sort</option>
          <option value="rating-high">Rating: High → Low</option>
          <option value="rating-low">Rating: Low → High</option>
        </select>
      </div>

      {/* Grid */}
      <div className="models-grid">
        {filteredModels.map((model) => (
          <Link
            key={model.id}
            to={`/model/${model.id}`}
            className="model-card"
          >
            <div className="card-top">
              <span className="model-category">{model.category}</span>
              <span className="model-rating">⭐ {model.rating}</span>
            </div>

            <h3>{model.name}</h3>
            <p>{model.description}</p>

            <button className="model-btn">View Model →</button>
          </Link>
        ))}
      </div>
    </div>
  </div>
);
}

export default Models;