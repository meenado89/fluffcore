
import "./Fluff.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useRef, useEffect, useState } from "react";
import FluffCoreBackground from "./FluffCoreBackground";
// import hero4 from "../assets/heroimg4.jpg";
// import NavBar from "./NavBar";
import CircularPortfolioSite from '../components/Cslider'
const Home = () => {
    return(
       
        <>
      {/* <NavBar/> */}
      <FluffCoreBackground/>
      {/* <img src={hero4} alt="hero-img" />    */}
      <CircularPortfolioSite/>
        </>
    );
};
export default Home;