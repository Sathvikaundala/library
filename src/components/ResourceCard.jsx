function ResourceCard({ icon, title, category, description, downloads, rating }) {
  return (
    <div className="card h-100 shadow-lg border-0" style={{ borderRadius: "12px", transition: "transform 0.3s, box-shadow 0.3s" }} 
         onMouseEnter={(e) => {
           e.currentTarget.style.transform = "translateY(-8px)";
           e.currentTarget.style.boxShadow = "0 15px 35px rgba(102, 126, 234, 0.3)";
         }}
         onMouseLeave={(e) => {
           e.currentTarget.style.transform = "translateY(0)";
           e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
         }}>
      <div className="card-body p-4">
        <div style={{ fontSize: "40px", marginBottom: "12px" }}>{icon}</div>
        <h5 className="card-title fw-bold mb-2" style={{ color: "#333", fontSize: "18px" }}>{title}</h5>
        <span className="badge bg-primary mb-3" style={{ fontSize: "12px", padding: "6px 10px" }}>
          {category}
        </span>
        <p className="card-text text-muted mb-3" style={{ fontSize: "14px", lineHeight: "1.6" }}>
          {description}
        </p>

        <div className="d-flex justify-content-between align-items-center mb-3" style={{ fontSize: "13px", color: "#666" }}>
          <span>📥 {downloads} downloads</span>
          <span style={{ color: "#FFC107" }}>⭐ {rating}</span>
        </div>

        <button className="btn btn-primary w-100 fw-bold" style={{ borderRadius: "8px", padding: "10px" }}>
          ⬇️ Download
        </button>
      </div>
    </div>
  );
}

export default ResourceCard;