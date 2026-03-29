import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handlePostJob = () => {
    alert("Post Job feature coming soon 🚀");
  };

  return (
    <nav className="navbar">
      <h2 className="logo" onClick={() => navigate("/")}>
  Quick<span>Hire</span>
</h2>

      <div className="nav-buttons">
        <button className="btn home-btn" onClick={() => navigate("/")}>
          Home
        </button>

        <button className="btn" onClick={handlePostJob}>
          Post Job
        </button>

        <button className="btn" onClick={() => navigate("/applications")}>
           My Applications
        </button>

        <button className="btn outline" onClick={() => navigate("/login")}>
           Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;