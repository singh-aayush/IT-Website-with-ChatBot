import Footer from "./footer";
import { useEffect } from "react";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contactPage">
      <div className="contactContainer">
        <h1>
          CONTACT <span> US</span>
        </h1>
        <div className="formContainer">
          <form>
            <div className="detailsSection">
              <div className="name personalContact">
                <label className="label">Your Name</label>
                <input className="labelInput" type="text" placeholder="Name*" />
              </div>
              <div className="phoneNumber personalContact">
                <label className="label">Phone Number</label>
                <input
                  className="labelInput"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className="emailSection personalContact">
                <label className="label">Email Address</label>
                <input
                  className="labelInput"
                  type="text"
                  placeholder="Email*"
                />
              </div>
              <div className="serviceSection personalContact">
                <label className="label">Services</label>
                <input
                  className="labelInput"
                  type="text"
                  placeholder="All Services"
                />
              </div>
            </div>
            <div className="aboutComanyDetails">
              <div className="companyName personalContact">
                <label className="labelSecond">Your Company Name</label>
                <input
                  className="labelInputSecond"
                  type="text"
                  placeholder="Company*"
                />
              </div>
              <div className="subjectSection personalContact">
                <label className="label">Subject</label>
                <input
                  className="labelInputSecond"
                  type="text"
                  placeholder="Subject*"
                />
              </div>
              <div className="subjectDescriptionSection personalContact">
                <label className="label">Description</label>
                <textarea
                  className="textarea"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <button type="submit">Send Mail</button>
          </form>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default ContactUs;
