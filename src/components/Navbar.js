import { Link } from "react-router-dom"; 
import "./Navbar.css";

const Navbar = ({ user, handleLogout }) => {
  return (
    <nav className="navbar">
      {user ? (
        <div className="nav-box"> 
          <Link to="/events" className="nav-item">Events</Link>
          {user.role === "admin" && <Link to="/create-event" className="nav-item">Create Event</Link>}
          <Link to="/dashboard" className="nav-item">Dashboard</Link>
          <button onClick={handleLogout} className="nav-item logout-btn">Logout</button>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
