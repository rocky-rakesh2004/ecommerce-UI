import React from "react";

const ProductCard = ({ product, cartItems, addToCart, handleAdd, handleSub }) => {
  const cartItem = cartItems.find((item) => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="product-price">₹{Math.floor(product.price * 20)}</p>

      {cartItem ? (
        <div className="qty-controls">
          <button onClick={() => handleSub(product.id)}>-</button>
          <span>{cartItem.qty}</span>
          <button onClick={() => handleAdd(product.id)}>+</button>
        </div>
      ) : (
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
