import React, { useState, useEffect } from "react";
import "../styles/CheckoutPage.css"; // create a dedicated CSS
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const CheckoutPage = () => {
  // Cart items from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

  const handleAdd = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const handleSub = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  // User details
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [deliverySchedule, setDeliverySchedule] = useState("Express Delivery");
  const [orderNote, setOrderNote] = useState("");

  // Persist cart items
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Cart total
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const tax = 0; // placeholder
  const shipping = 0; // placeholder
  const total = subtotal + tax + shipping;

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      {/* Contact */}
      <section className="checkout-section">
        <h3>Contact Number</h3>
        <div className="input-group">
          <span className="country-code">+91</span>
          <input
            type="text"
            placeholder="Enter phone number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
      </section>

      {/* Name */}
      <section className="checkout-section">
        <h3>Name</h3>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </section>

      {/* Address */}
      <section className="checkout-section">
        <h3> Address </h3>
        <input
          type="text"
          placeholder="Enter your Address"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
        />
      </section>

      {/* Delivery Schedule */}
      <section className="checkout-section">
        <h3>Delivery Schedule</h3>
        <select
          value={deliverySchedule}
          onChange={(e) => setDeliverySchedule(e.target.value)}
        >
          <option>Express Delivery (90 min)</option>
          <option>Morning (8:00 AM - 11:00 AM)</option>
          <option>Noon (11:00 AM - 2:00 PM)</option>
          <option>Afternoon (2:00 PM - 5:00 PM)</option>
          <option>Evening (5:00 PM - 8:00 PM)</option>
        </select>
      </section>

      {/* Order Note */}
      <section className="checkout-section">
        <h3>Order Note</h3>
        <textarea
          placeholder="Add any special instructions"
          value={orderNote}
          onChange={(e) => setOrderNote(e.target.value)}
        />
      </section>

      {/* Order Summary */}
      <section className="checkout-section order-summary">
        <h3>Your Order</h3>
        <div className="order-items">
          {cartItems.map((item) => (
            <div key={item.id} className="order-item">
              <span>{item.title}</span>
              <img src={item.thumbnail} alt="" />
              <div className="order-qty-price">
                <div className="qty-controls">
                  <button onClick={() => handleSub(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => handleAdd(item.id)}>+</button>
                </div>
                <span>₹{item.price * item.qty}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="order-totals">
          <p>
            Sub Total: <span>₹{subtotal.toFixed(2)}</span>
          </p>
        </div>
        <button className="checkout-btn">Confirm Order</button>
        <button className="back-btn">
          {" "}
          <Link to="/">Back to store</Link>{" "}
        </button>
      </section>
    </div>
  );
};

export default CheckoutPage;
