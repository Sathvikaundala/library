import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", minHeight: "100vh", paddingTop: "60px" }}>
      <div className="container py-5">
        <div className="text-white mb-5">
          <h1 className="display-4 fw-bold mb-2">🛡️ Admin Dashboard</h1>
          <p className="fs-5" style={{ opacity: 0.95 }}>Manage and organize educational resources</p>
        </div>

        {/* Stats Cards */}
        <div className="row g-4 mb-5">
          <div className="col-md-3">
            <div className="card shadow-sm border-0" style={{ background: "rgba(255,255,255,0.95)" }}>
              <div className="card-body text-center">
                <div style={{ fontSize: "32px", marginBottom: "10px" }}>📊</div>
                <h5 className="card-title">Total Resources</h5>
                <h2 className="fw-bold" style={{ color: "#667eea" }}>156</h2>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm border-0" style={{ background: "rgba(255,255,255,0.95)" }}>
              <div className="card-body text-center">
                <div style={{ fontSize: "32px", marginBottom: "10px" }}>📤</div>
                <h5 className="card-title">Uploaded This Month</h5>
                <h2 className="fw-bold" style={{ color: "#667eea" }}>24</h2>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm border-0" style={{ background: "rgba(255,255,255,0.95)" }}>
              <div className="card-body text-center">
                <div style={{ fontSize: "32px", marginBottom: "10px" }}>👥</div>
                <h5 className="card-title">Active Users</h5>
                <h2 className="fw-bold" style={{ color: "#667eea" }}>1,234</h2>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm border-0" style={{ background: "rgba(255,255,255,0.95)" }}>
              <div className="card-body text-center">
                <div style={{ fontSize: "32px", marginBottom: "10px" }}>⭐</div>
                <h5 className="card-title">Avg Rating</h5>
                <h2 className="fw-bold" style={{ color: "#667eea" }}>4.8/5</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow-lg border-0" style={{ background: "rgba(255,255,255,0.95)" }}>
              <div className="card-body p-4">
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>📚</div>
                <h5 className="card-title fw-bold mb-2">Upload New Resource</h5>
                <p className="text-muted mb-3">Add textbooks, research papers, or study guides to the library</p>
                <Link to="/upload" className="btn btn-primary fw-bold">
                  Start Upload →
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-lg border-0" style={{ background: "rgba(255,255,255,0.95)" }}>
              <div className="card-body p-4">
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>🔍</div>
                <h5 className="card-title fw-bold mb-2">Browse All Resources</h5>
                <p className="text-muted mb-3">Review and manage all resources in the system</p>
                <Link to="/resources" className="btn btn-outline-primary fw-bold">
                  View Resources →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;