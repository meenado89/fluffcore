import "./Fluff.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Mlogo from "../assets/Mlogo.png"
const NavBar = () => {
  return (
    <div className="nav">
      <div className="Navbar">
        <ul>
          {/* <img src={Mlogo} alt="logo" id="Main-logo"/> */}
          <li>
            <h2>FluffCore Studios</h2>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
