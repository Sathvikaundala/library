import { Link } from "react-router-dom";

function Navbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userEmail = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <Link className="navbar-brand" to="/">Resource Library</Link>

      <div className="navbar-nav ms-auto">

        {/* ✅ Admin ALWAYS visible */}
        <Link className="nav-link" to="/admin">Admin</Link>

        {/* Register */}
        <Link className="nav-link" to="/register">Register</Link>

        {/* Login only if NOT logged in */}
        {!isLoggedIn && (
          <Link className="nav-link" to="/login">Login</Link>
        )}

        {/* Home & Resources */}
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/resources">Resources</Link>

        {/* If user logged in show email + logout */}
        {isLoggedIn && (
          <>
            <span className="nav-link text-white">{userEmail}</span>
            <button
              className="btn btn-sm btn-light ms-2"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;