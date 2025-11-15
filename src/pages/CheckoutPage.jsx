import React, { useState, useEffect } from "react";
import "../styles/CheckoutPage.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [deliverySchedule, setDeliverySchedule] = useState("Express Delivery");
  const [orderNote, setOrderNote] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleConfirmOrder = () => {
    if (!contact.trim() || !name.trim() || !shippingAddress.trim()) {
      alert("Please fill in all required fields (Contact, Name, Address).");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    console.log("Order confirmed:", cartItems);

    setCartItems([]);
    localStorage.removeItem("cartItems");

    setOrderPlaced(true);
  };

 if (orderPlaced) {
  return (
    <div className="checkout-page thank-you-page">
      <div className="thank-you-content">
        <h1 className="thank-you-title">Thank You!</h1>
        <p className="thank-you-message">
          Your order has been placed successfully. <br />
        </p>
        <Link to="/" className="checkout-btn return-home-btn">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

  return (
    <div className="checkout-page">
      <Link style={{ color: "#ff6600", fontSize: "2rem" }} to="/">
        <FaArrowLeft />
      </Link>
      <h1>Checkout</h1>

      <section className="checkout-section">
        <h3>Contact Number</h3>
        <div className="input-group">
          <span className="country-code">+91</span>
          <input
            type="number"
            placeholder="Enter phone number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
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
          required
        />
      </section>

      {/* Address */}
      <section className="checkout-section">
        <h3>Address</h3>
        <input
          type="text"
          placeholder="Enter your Address"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
          required
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
        <h2>Your Orders</h2>
        <div className="order-items">
          {cartItems.length === 0 && (
            <p style={{ textAlign: "center", color: "#666" }}>
              No items in cart.
            </p>
          )}

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
        <button className="checkout-btn" onClick={handleConfirmOrder}>
          Confirm Order
        </button>
        <Link to="/" className="back-btn">
          Back to store
        </Link>
      </section>
    </div>
  );
};

export default CheckoutPage;
