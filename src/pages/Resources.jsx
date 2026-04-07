import { useEffect, useState } from "react";
import ResourceCard from "../components/ResourceCard";
import { getResources, uploadResource } from "../services/api";

function Resources() {
  const [resources, setResources] = useState([]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  // Fetch resources
  const fetchResources = async () => {
    const data = await getResources();
    setResources(data);
  };

  useEffect(() => {
    fetchResources();
  }, []);

  // Upload
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("file", file);

    const res = await uploadResource(formData);
    alert(res);

    fetchResources(); // 🔥 refresh list after upload
  };

  return (
    <div className="container mt-5">
      <h2>Resources</h2>

      {/* 🔥 UPLOAD SECTION */}
      <div className="card p-4 mb-4">
        <h4>Upload Resource</h4>

        <input
          className="form-control mb-2"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />

        <textarea
          className="form-control mb-2"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="file"
          className="form-control mb-2"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button className="btn btn-primary" onClick={handleUpload}>
          Upload
        </button>
      </div>

      {/* 📚 RESOURCE LIST */}
      <div className="row">
        {resources.map((r) => (
          <div className="col-md-4" key={r.id}>
            <ResourceCard {...r} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;