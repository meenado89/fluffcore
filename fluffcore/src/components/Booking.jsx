import "./Fluff.css";
import FluffCoreBackground from "./FluffCoreBackground";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useEffect, useState } from "react";

// import booking1 from "../assets/pre-booking1.png";

const Booking = () => {
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

  console.log("Form submitted:", formData);
  alert("Pre-booking successful!");
};


  //  QUANTITY CONTROL
  const [quantity, setQuantity] = useState(1);
  const plus = () => {
    setQuantity(quantity + 1);
  };

  const minus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  // TOTAL PRICE
  const unitPrice = 800;
  // const calculateTotal = () => {
  //   return quantity * unitPrice;
  // };

  // donation
  const [donation, setDonation] = useState(0);

  const handleDonationChange = (e) => {
  const selectedAmount = parseInt(e.target.value);
  setDonation(selectedAmount);

  if (selectedAmount > 0) {
    alert("THANK YOU FOR DONATION");
  }
};

  return (
    <>
      <FluffCoreBackground />
      <div className="Banner-container">
       {/* <div className="img-container">
         <img src={booking1} id="booking1-img" />
       </div> */}
        <div className="headder text-center">
          <h1>Pre-Booking Page</h1>

          <p>
            <b>Pre-Order Your Plush</b>
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
              <div className="quantity-price-wrapper d-flex p-3">
                <div className="row">
                  <div className="col-6 ">
                    <div className="quantity-wrapper d-flex ">
                      <button
                        type="button"
                        className="decrement"
                        onClick={minus}
                      >
                        -
                      </button>
                      <span>{quantity}</span>

                      <button
                        type="button"
                        className="increment"
                        onClick={plus}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-6">
                    {/* updated price */}
                    <div className="total-price">
                      Total: ₹{quantity * unitPrice + donation}
                    </div>
                  </div>
                </div>
              </div>
              <div className="donation-container w-75 text-center pe-5">
                <div className="donation-heading">
                  <h4>Help an Real Animal Too!</h4>
                  <h6>
                    Add a donation to support animal shelters - every dollar
                    helps a real fluff find their home!
                  </h6>
                  <div className="donation-form">
                    <div className="container">
                      <div className="donation-wrapper">
                        <div className="form-check">
                          <div className="row">
                            <div className="col-6 d-flex flex-column gap-2">
                              <div>
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="donation"
                                  id="donation0"
                                  value="0"
                                  checked={donation === 0}
                                  onChange={handleDonationChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="donation0"
                                >
                                  ₹0
                                </label>
                              </div>

                              <div>
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="donation"
                                  id="donation5"
                                  value="5"
                                  checked={donation === 5}
                                  onChange={handleDonationChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="donation5"
                                >
                                  ₹5
                                </label>
                              </div>
                              <div>
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="donation"
                                  id="donation10"
                                  value="10"
                                  checked={donation === 10}
                                  onChange={handleDonationChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="donation10"
                                >
                                  ₹10
                                </label>
                              </div>
                              <div>
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="donation"
                                  id="donation15"
                                  value="15"
                                  checked={donation === 15}
                                  onChange={handleDonationChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="donation15"
                                >
                                  ₹15
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* <p className="mt-3">${donation}</p> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="contact-btn w-25">
                    Pre-Book Now
                  </button>
                </div>
              </div>
            </form>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
