import { useState } from "react";
import ProductCard from "./ProductCard";
import Loading from "./Loading";

const ProductList = ({
  products = [],
  loading,
  addToCart,
  cartItems,
  handleAdd,
  handleSub,
}) => {
  const [visibleCount, setVisibleCount] = useState(10);

  if (loading)
  return (
    <div>
      <Loading />
    </div>
  );

  if (!products.length)
    return (
      <p
        style={{
          textAlign: "center",
          marginTop: "2rem",
          fontSize: "1.2rem",
          color: "gray",
          fontWeight: "500",
        }}
      >
        No products found.
      </p>
    );

  const visibleProducts = products.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="products-grid">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cartItems={cartItems}
            addToCart={addToCart}
            handleAdd={handleAdd}
            handleSub={handleSub}
          />
        ))}
      </div>

      {visibleCount < products.length && (
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <button className="banner-btn" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
