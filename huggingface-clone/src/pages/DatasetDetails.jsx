import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function DatasetDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDatasetDetails();
  }, [id]);

  const fetchDatasetDetails = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        "http://localhost:5000/api/dataset-details",
        { dataset: id }
      );

      if (response.data.success) {
        setDetails(response.data.content);
      } else {
        setError("Failed to load dataset details.");
      }

    } catch (err) {
      console.error(err);
      setError("Error generating dataset information.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dataset-details-page">
      
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back to Datasets
      </button>

      {/* Title */}
      <h1 className="dataset-title-large">
        {id.replace(/-/g, " ").toUpperCase()}
      </h1>

      {/* Loading */}
      {loading && (
        <div className="dataset-loading">
          Generating AI-powered dataset details...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="dataset-error">
          {error}
        </div>
      )}

      {/* Content */}
      {!loading && !error && (
        <div className="dataset-ai-content">
          {details}
        </div>
      )}

    </div>
  );
}

export default DatasetDetails;