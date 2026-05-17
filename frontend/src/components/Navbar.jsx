import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>AI Study Planner</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/planner">AI Planner</Link>

        <Link to="/doubts">Doubt Solver</Link>
      </div>
    </nav>
  );
}

export default Navbar;