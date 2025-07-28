import "./Fluff.css";
import FluffCoreBackground from "./FluffCoreBackground";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";

import hero4 from "../assets/heroimg4.jpg";

const Booking = () => {
  const formRef = useRef(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(formRef.current);
    const formData = {};
    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }

    console.log("Form submitted:", formData);
    alert("Pre-booking successful!");
  };

  return (
    <>
      <FluffCoreBackground />
      <div className="Banner-container">
        {/* <img src={hero4} id="Heo4-img" /> */}
          <div className="headder text-center">
            <h1>
                Pre-Booking Page
            </h1>

            <p>
                <b>
                Pre-Order Your Plush
                </b>
                </p>
                <span>Reserve Your Favorite Fluff — Before They Crawl Away!</span>
          </div>

      </div>

      <div className="form-container">
        <div className="Cform col-12 col-md-6">
          <div className="form-container p-4">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="row">
                <div className="mb-3 col-6 text-dark">
                  <label htmlFor="name-field" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name-field"
                    name="name"
                    className="form-control"
                  />
                </div>

                <div className="mb-3 col-6 text-dark">
                  <label htmlFor="email-field" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email-field"
                    name="email"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="mb-3 col-12 text-dark">
                <label htmlFor="Message" className="form-label">
                  Personal Message
                </label>
                <input
                  type="text"
                  id="Message"
                  name="Message"
                  className="form-control"
                />
              </div>

              <div className="mb-3 col-12 text-dark">
                <label htmlFor="Address" className="form-label">
                 Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="form-control"
                  rows="5"
                ></textarea>
              </div>

                {/* quantity counter */}
                {/* updated price */}

            

              <button type="submit" className="contact-btn w-25">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
