import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const users =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    if (users.length === 0) {
      alert("No registered users found. Please register first.");
      return;
    }

    const validUser = users.find(
      (user) =>
        user.email === email && user.password === password
    );

    if (validUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);

      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "60px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card shadow-xl border-0">
              <div className="card-body p-5">
                <div style={{ fontSize: "50px", marginBottom: "20px", textAlign: "center" }}>🔐</div>
                <h2 className="text-center fw-bold mb-2" style={{ color: "#667eea" }}>Welcome Back</h2>
                <p className="text-center text-muted mb-4">Login to your account</p>

                <div className="mb-3">
                  <label className="form-label fw-bold mb-2">Email Address</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ borderRadius: "8px" }}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold mb-2">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ borderRadius: "8px" }}
                  />
                </div>

                <button className="btn btn-success btn-lg w-100 fw-bold mb-3" onClick={handleLogin} style={{ borderRadius: "8px" }}>
                  ✓ Login
                </button>

                <p className="text-center text-muted">
                  Don't have an account? <a href="/register" className="fw-bold" style={{ color: "#667eea" }}>Register here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;