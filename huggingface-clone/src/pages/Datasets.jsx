import { useNavigate } from "react-router-dom";

function Datasets() {
  const navigate = useNavigate();

  const datasets = [
    { id: "common-voice", title: "Common Voice" },
    { id: "imagenet", title: "ImageNet" },
    { id: "imdb-reviews", title: "IMDB Reviews" },
    { id: "coco", title: "COCO Dataset" },
    { id: "wikitext-103", title: "WikiText-103" },
    { id: "openwebtext", title: "OpenWebText" },
    { id: "squad", title: "SQuAD" },
    { id: "mnist", title: "MNIST" },
    { id: "libri-speech", title: "LibriSpeech" },
    { id: "cityscapes", title: "Cityscapes" },
    { id: "glue", title: "GLUE Benchmark" },
    { id: "laion-5b", title: "LAION-5B" },
    { id: "fashion-mnist", title: "Fashion-MNIST" },
    { id: "cifar-10", title: "CIFAR-10" },
    { id: "ag-news", title: "AG News" }
  ];

  return (
    <div className="page-wrapper">
      <div className="datasets-grid">
        {datasets.map((dataset) => (
          <div
            key={dataset.id}
            className="dataset-card"
            onClick={() => navigate(`/datasets/${dataset.id}`)}
            style={{ cursor: "pointer" }}
          >
            <h3>{dataset.title}</h3>
            <p>Click to view full AI-generated details.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Datasets;