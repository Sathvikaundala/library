import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email.includes("@")) {
      alert("Invalid email address");
      return;
    }

    if (password.length < 4) {
      alert("Password must be at least 4 characters");
      return;
    }

    // 🔹 Get existing users OR empty array
    const existingUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // 🔹 Check if email already exists
    const userExists = existingUsers.some(
      (user) => user.email === email
    );

    if (userExists) {
      alert("User already registered. Please login.");
      navigate("/login");
      return;
    }

    // 🔹 Add new user
    const newUser = { email, password };
    existingUsers.push(newUser);

    // 🔹 Save back to localStorage
    localStorage.setItem(
      "registeredUsers",
      JSON.stringify(existingUsers)
    );

    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "60px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card shadow-xl border-0">
              <div className="card-body p-5">
                <div style={{ fontSize: "50px", marginBottom: "20px", textAlign: "center" }}>🎓</div>
                <h2 className="text-center fw-bold mb-2" style={{ color: "#667eea" }}>Create Account</h2>
                <p className="text-center text-muted mb-4">Join our learning community</p>

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
                    placeholder="Create a password (min 4 characters)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ borderRadius: "8px" }}
                  />
                </div>

                <button className="btn btn-primary btn-lg w-100 fw-bold mb-3" onClick={handleRegister} style={{ borderRadius: "8px" }}>
                  ✓ Register
                </button>

                <p className="text-center text-muted">
                  Already have an account? <a href="/login" className="fw-bold" style={{ color: "#667eea" }}>Login here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;