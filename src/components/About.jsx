import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import intro from "../assets/video1.mp4";
import FluffCoreBackground from "./FluffCoreBackground";
import AboutSlider from "./AboutSlider";
import NavBar from "./NavBar";
const About = () => {
    return (
        <>
               <FluffCoreBackground />
                 <AboutSlider/>
              <NavBar/>
            <section>
                <div className="hero w-100 h-100">
                    <div className="info-container ">
                        <div className="header">
                            <div className="heading-wrapper">
                                <h1>
                                    About Us
                                </h1>
                            </div>
                        </div>
                        <div className="info-wrapper">
                            <div className="row gy-2">
                                <div className="col-lg-4 col-sm-12 col-md-6 about-us justify-content-start ">
                                    <h2>We’re FluffCore Studios</h2>
                                    <p>
                                        Founded in 2023 with bubble tea in hand and a sketchpad full
                                        of monsters, we’re reimagining what “cute” means—and using it
                                        to do good. Our plushies have big feelings, weird flaws, and
                                        real purpose: Every sale helps real animals get shelter, care,
                                        and love.
                                    </p>
                                </div>
                                <div className="col-lg-4 col-sm-12 col-md-6 video">
                                    <video autoPlay loop muted playsInline className="about-video">
                                        <source src={intro} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="col-lg-4 col-sm-12 col-md-6 about-tag  align-self-end">
                                    <h2>
                                        “Born to be cuddled. Built to cause chaos. Designed to do good.”
                                    </h2>
                                    <p>
                                        At FluffCore, we craft plush creatures with big feelings, bigger flaws, and a purpose. Every adoption fuels animal shelters,
                                        supports rescues, and spreads joy. Hug weird. Give back. Repeat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
        </>
    );
};

export default About;
