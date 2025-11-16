import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cartItems = [], setCartItems, toggleCart, isOpen }) => {
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

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart-container">
      <button className="cart-icon-btn" onClick={toggleCart}>
        <FaShoppingCart size={22} />
        <div style={{backgroundColor:"white", color: "red", padding :"0.1rem",borderRadius:"20%"}}>₹{total}</div>
        {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
        )}
      </button>

      {isOpen && (
        <div className="cart-panel">
          <button className="cart-close-btn" onClick={toggleCart}>✕</button>
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            <>
              <div className="cart-items">
                <h1 className="cart-heading" style={{ textAlign: "center" }}>
                  Your cart
                </h1>
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="cart-item-info">
                      <span>{item.title}</span>
                      <span>₹{item.price}</span>
                      <div className="cart-item-qty">
                        <button onClick={() => handleSub(item.id)}>-</button>
                        <span>{item.qty}</span>
                        <button onClick={() => handleAdd(item.id)}>+</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-total">Total: ₹{total}</div>
              <button className="checkout-btn">
                <Link to="/cart">Check Out</Link>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
