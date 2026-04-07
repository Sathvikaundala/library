import { useState } from "react";
import { uploadResource } from "../services/api";

function Upload() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("file", file);

    const res = await uploadResource(formData);
    alert(res);
  };

  return (
    <div className="container mt-5">
      <h2>Upload Resource</h2>

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
  );
}

export default Upload;