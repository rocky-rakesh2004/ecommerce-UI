import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ProductList.css";

const categories = ["All","Groceries", "Men", "Women", "Electronics", "Beauty", "Furniture"];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((res) => {
        setProducts(res.data.products);
        setFilteredProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((p) => {
        const cat = p.category.toLowerCase();
        if (category === "Men") return cat.includes("mens");
        if (category === "Women") return cat.includes("beauty");
        if (category === "Electronics")
          return ["smartphones", "laptops", "tablets", "mobile"].some((c) =>
            cat.includes(c)
          );
        if (category === "Beauty") return ["beauty", "skin"].some((c) => cat.includes(c));
        if (category === "Furniture")
          return ["furniture", "home"].some((c) => cat.includes(c));
        if (category === "Groceries") return cat.includes("groceries");
        return false;
      });
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="products-page" id="shop">
      <div className="products-container">

        <aside className="category-sidebar">
          <h2>Categories</h2>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </aside>

        <main className="products-content">
          {loading ? (
            <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.thumbnail} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p className="product-price">₹{Math.floor(product.price*20)}</p>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
