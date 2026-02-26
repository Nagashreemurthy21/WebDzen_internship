function Datasets() {
  return (
    <div className="page-wrapper">

 <div className="dataset-controls">
  <input
    type="text"
    placeholder="Search datasets..."
    className="dataset-search"
  />

  <select className="dataset-sort">
    <option>Trending</option>
    <option>Newest</option>
    <option>Most Downloaded</option>
  </select>
</div>

      <div className="datasets-grid">

        <div className="dataset-card">
          <h3>Common Voice</h3>
          <p>Open-source multilingual speech dataset.</p>
          <span className="dataset-tag">Speech</span>
          <div className="dataset-stats">
            <span>⬇ 120K</span>
            <span>⭐ 4.7</span>
          </div>
        </div>

        <div className="dataset-card">
          <h3>ImageNet</h3>
          <p>Large visual database for object recognition research.</p>
          <span className="dataset-tag">Vision</span>
          <div className="dataset-stats">
            <span>⬇ 250K</span>
            <span>⭐ 4.9</span>
          </div>
        </div>

        <div className="dataset-card">
          <h3>IMDB Reviews</h3>
          <p>Movie reviews dataset for sentiment analysis.</p>
          <span className="dataset-tag">NLP</span>
          <div className="dataset-stats">
            <span>⬇ 90K</span>
            <span>⭐ 4.6</span>
          </div>
        </div>

        <div className="dataset-card">
          <h3>COCO Dataset</h3>
          <p>Large-scale object detection, segmentation, and captioning dataset.</p>
          <span className="dataset-tag">Computer Vision</span>
          <div className="dataset-stats">
            <span>⬇ 180K</span>
            <span>⭐ 4.8</span>
          </div>
        </div>

        <div className="dataset-card">
          <h3>WikiText-103</h3>
          <p>Large language modeling benchmark dataset.</p>
          <span className="dataset-tag">Language Modeling</span>
          <div className="dataset-stats">
            <span>⬇ 75K</span>
            <span>⭐ 4.5</span>
          </div>
        </div>

        <div className="dataset-card">
          <h3>OpenWebText</h3>
          <p>Web crawl dataset used for training large language models.</p>
          <span className="dataset-tag">Text</span>
          <div className="dataset-stats">
            <span>⬇ 140K</span>
            <span>⭐ 4.7</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Datasets;
