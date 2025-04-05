import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="nav-buttons">
          <button className="nav-btn"><Link to="/Home">Home</Link></button>
          <button className="nav-btn"><Link to="/Login">Login</Link></button>
        </div>
      </nav>
      <div className="content">
      <div className="title-container">
      <div className="title-wrapper">
      <h1 className="title">EVENT ZEN</h1>
      </div>
      <p className="subtitle">Welcome to Event Management System</p>
      </div>

      </div>
      <p className="tagline">Event Finding Made Easier</p>
    </div>
      
  );
};

export default Home;
