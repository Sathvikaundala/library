import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await loginUser({ email, password });

    if (res.message === "success") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", res.email);

      alert("Login successful");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <input
        className="form-control mb-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-2"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-success" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;