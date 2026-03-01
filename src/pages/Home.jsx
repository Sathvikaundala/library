import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", minHeight: "100vh", paddingTop: "60px" }}>
      {/* Hero Section */}
      <div className="container text-center text-white py-5">
        <h1 className="display-3 fw-bold mb-3">📚 Educational Resource Library</h1>
        <p className="fs-5 mb-5" style={{ opacity: 0.95 }}>
          Discover curated textbooks, research papers, and study guides all in one place
        </p>

        {/* Search Bar */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6">
            <div style={{ position: "relative" }}>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="🔍 Search resources..."
                style={{ borderRadius: "50px", padding: "12px 20px", fontSize: "16px" }}
              />
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mb-5">
          <Link to="/resources" className="btn btn-light btn-lg me-3 fw-bold">
            Browse Resources
          </Link>
          <Link to="/register" className="btn btn-outline-light btn-lg fw-bold">
            Get Started
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold" style={{ color: "#333" }}>
            Why Choose Our Library?
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 rounded shadow-sm text-center" style={{ background: "#f8f9fa" }}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>📖</div>
                <h5 className="fw-bold mb-2">Comprehensive Collection</h5>
                <p className="text-muted">Access thousands of textbooks, guides, and research papers</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded shadow-sm text-center" style={{ background: "#f8f9fa" }}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>⚡</div>
                <h5 className="fw-bold mb-2">Quick & Easy Access</h5>
                <p className="text-muted">Instant downloads and seamless browsing experience</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded shadow-sm text-center" style={{ background: "#f8f9fa" }}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>🎓</div>
                <h5 className="fw-bold mb-2">Curated Content</h5>
                <p className="text-muted">Only verified and high-quality educational materials</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }} className="py-5 text-white text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3 className="display-5 fw-bold">5000+</h3>
              <p>Resources</p>
            </div>
            <div className="col-md-3">
              <h3 className="display-5 fw-bold">50K+</h3>
              <p>Active Users</p>
            </div>
            <div className="col-md-3">
              <h3 className="display-5 fw-bold">100%</h3>
              <p>Free Access</p>
            </div>
            <div className="col-md-3">
              <h3 className="display-5 fw-bold">24/7</h3>
              <p>Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;