import "./Fluff.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Mlogo from "../assets/Mlogo.png"
const NavBar = () => {
  return (
    <div className="nav">
      <div className="Navbar">
        <ul>
         
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

// OPTION 2

// import "./Fluff.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
// import React from "react";
// import "../components/NavBar.css"
// const NavBar = () => {
//   return (
//    <>
//     <nav className="menu">
//       <input
//         type="checkbox"
//         className="menu-open"
//         name="menu-open"
//         id="menu-open"
//       />
//       <label className="menu-open-button" htmlFor="menu-open">
//         <span className="lines line-1"></span>
//         <span className="lines line-2"></span>
//         <span className="lines line-3"></span>
//       </label>

//       <a href="#" className="menu-item blue">
//         <box-icon name='command' ></box-icon>
//       </a>
//       <a href="#" className="menu-item green">
//        <box-icon name='loader-circle' ></box-icon>
//       </a>
//       <a href="#" className="menu-item red">
//         <box-icon name='chip' type='solid' ></box-icon>
//       </a>
//       <a href="#" className="menu-item purple">
//        <box-icon name='dock-top' type='solid' ></box-icon>
//       </a>
//       <a href="#" className="menu-item orange">
//       <box-icon name='border-none' ></box-icon>
//       </a>
//       <a href="#" className="menu-item lightblue">
//        <box-icon name='border-none' ></box-icon>
//       </a>
//     </nav>
//    </>
//   );
// };

// export default NavBar;
