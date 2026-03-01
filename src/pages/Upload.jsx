function Upload() {
  return (
    <div style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", minHeight: "100vh", paddingTop: "60px" }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <div style={{ fontSize: "50px", marginBottom: "20px", textAlign: "center" }}>📤</div>
                <h2 className="text-center fw-bold mb-4" style={{ color: "#667eea" }}>Upload Resource</h2>
                <p className="text-center text-muted mb-4">Share your educational materials with the community</p>

                <div className="mb-3">
                  <label className="form-label fw-bold mb-2">Resource Title</label>
                  <input
                    className="form-control form-control-lg"
                    placeholder="e.g., Advanced Database Management"
                    style={{ borderRadius: "8px" }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold mb-2">Category</label>
                  <select className="form-select form-select-lg" style={{ borderRadius: "8px" }}>
                    <option>Select Category</option>
                    <option>Textbook</option>
                    <option>Research Paper</option>
                    <option>Study Guide</option>
                    <option>Lecture Notes</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold mb-2">Description</label>
                  <textarea
                    className="form-control"
                    placeholder="Describe your resource in detail..."
                    rows="4"
                    style={{ borderRadius: "8px" }}
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold mb-2">Upload File</label>
                  <div style={{
                    border: "2px dashed #667eea",
                    borderRadius: "8px",
                    padding: "30px",
                    textAlign: "center",
                    cursor: "pointer",
                    background: "rgba(102, 126, 234, 0.05)"
                  }}>
                    <div style={{ fontSize: "30px", marginBottom: "10px" }}>📎</div>
                    <p className="mb-1">Drag and drop your file here</p>
                    <p className="text-muted small">or click to browse</p>
                    <input
                      type="file"
                      className="form-control"
                      style={{ position: "absolute", opacity: "0" }}
                    />
                  </div>
                </div>

                <button className="btn btn-primary btn-lg w-100 fw-bold" style={{ borderRadius: "8px" }}>
                  ✓ Upload Resource
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;