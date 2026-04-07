import { downloadResource } from "../services/api";

function ResourceCard({ id, title, category, description, downloads, rating }) {
  return (
    <div className="card p-3 mb-3">
      <h5>{title}</h5>
      <p>{category}</p>
      <p>{description}</p>

      <p>Downloads: {downloads}</p>
      <p>Rating: {rating}</p>

      <button
        className="btn btn-success"
        onClick={async () => {
          const res = await downloadResource(id);
          window.open(`http://localhost:8080/uploads/${res.fileUrl}`);
        }}
      >
        Download
      </button>
    </div>
  );
}

export default ResourceCard;