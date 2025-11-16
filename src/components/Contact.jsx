import React from "react";
import "../styles/Contact.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="contact-page">
      <Link
        style={{
          color: "#ff6600",
          fontSize: "2rem",
          position: "absolute",
          margin: "1rem",
        }}
        to="/"
      >
        <FaArrowLeft />
      </Link>
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions? We're always here to help you!</p>
      </section>

      <section className="contact-content">
        <div className="contact-form-wrapper">
          <h2>Send a Message</h2>

          <form
            action="https://getform.io/f/bpjzzqeb"
            method="POST"
            className="contact-form"
          >
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
