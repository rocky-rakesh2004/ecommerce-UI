import React from "react";
import "../styles/About.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const About = () => {
  return (
    <div className="about-page">
      <Link style={{ color: "#ff6600", fontSize: "2rem" , position: "absolute", margin: "1rem"}} to="/">
        <FaArrowLeft />
      </Link>
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          We provide the best online shopping experience with unbeatable deals
          and trusted service.
        </p>
      </section>

      <section className="about-content">
        <div className="about-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
            alt="About"
          />
        </div>

        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            E-Shop is your trusted online marketplace offering high-quality
            products, fast delivery, and amazing discounts. We aim to make
            online shopping simple, fast, and enjoyable for everyone.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver the best products at affordable prices
            while providing a smooth and secure shopping experience.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔ Fast and Free Delivery</li>
            <li>✔ Best Deals and Discounts</li>
            <li>✔ 24/7 Customer Support</li>
            <li>✔ Trusted by Thousands of Users</li>
          </ul>
        </div>
        <Link to="/" className="checkout-btn return-home-btn">
          Return to Home
        </Link>
      </section>
    </div>
  );
};

export default About;
