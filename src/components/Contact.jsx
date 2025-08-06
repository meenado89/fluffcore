import "./Stylecontact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useEffect, useState } from "react";
import { Navigate, useNavigate, useNavigation, Link } from "react-router-dom";
import logo from "../assets/Mlogo.png"
const Contact = () => {
   const navigate = useNavigate();
    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(formRef.current);
        const formData = {};
        for (let [key, value] of form.entries()) {
            formData[key] = value.trim();
        }


        const hasEmptyFields = Object.values(formData).some(
            (value) => value === ""
        );

        if (hasEmptyFields) {
            alert("Please fill in all fields before submitting.");
            return;
        }
 
        console.log("E-mail submitted:", formData);
        alert("Subscribed!");
       navigate ("/Blog");
    };
    
    return (
        <section className="ContactM-container">
            <div className="contact-header">
                <h1>Get in Touch whit us</h1>
                <p>
                    We’d love to hear from you — whether it's feedback, questions or
                    collaborations!
                </p>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="row">
                        <div className="col-4">
                            <h1>Contact us</h1>
                            <p>add info1</p>
                            <span>add info2</span>
                        </div>
                        <div className="col-4">
                            <h1>Address</h1>
                            <p>add info1</p>
                            <span>add info2</span>
                        </div>
                        <div className="col-4">
                            <h1>Reg.Info</h1>
                            <p>add info1</p>
                            <span>add info2</span>
                        </div>
                    </div>
                </div>
                <hr className="w-75" />

                <div className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <img src={logo} alt="logo" id="about-logo" />
                                <div className="about-wrapper">
                                    <p>
                                        Born from a love of oddballs and outcasts, FluffCore redefines cute.
                                        Our plushies are bold, heartfelt, and a little chaotic.
                                        Perfect for those who find comfort in the wonderfully strange.
                                    </p>
                                </div>
                            </div>
                            <div className="col-4">
                                <h1>Contact us</h1>
                                <p>add info1</p>
                                <span>add info2</span>
                            </div>

                            <div className="col-4">
                                <h1>Follow us</h1>
                                <p>Instagram</p>
                                <span>KickStarter</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="w-75" />
                {/* NEWSlETTER */}

                <div className="news-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <h5>Grab the Latest Info!!!</h5>
                                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">

                                    <label htmlFor="email-field" className="form-label">
                                    </label>
                                    <input
                                        type="email"
                                        id="email-field"
                                        name="email"
                                        className="form-control"
                                    />
                                    {/* <button type="submit">Send</button> */}
                                    <button type="button">Subscribe</button>

                                </form>
                            </div>
                            <div className="col-4">
                                <h1>Contact us</h1>
                                <p>add info1</p>
                                <span>add info2</span>
                            </div>

                            <div className="col-4">
                                <h1>Follow us</h1>
                                <p>Instagram</p>
                                <span>KickStarter</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
