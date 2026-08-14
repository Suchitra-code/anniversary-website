import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        ❤️ Happy Wedding Anniversary ❤️
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/wedding">Journey</Link>

        <Link to="/timeline">Timeline</Link>

        <Link to="/gallery">Gallery</Link>

        <Link to="/letter">Letter</Link>

      </div>

    </nav>
  );
}

export default Navbar;