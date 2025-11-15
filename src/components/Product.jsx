import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import ProductCategories from "./ProductCategories";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { SearchContext } from "./SearchContext";

import "../styles/Product.css";

const categories = [
  "All",
  "Groceries",
  "Men",
  "Women",
  "Electronics",
  "Beauty",
  "Furniture",
];

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [showCart, setShowCart] = useState(false);

  const { searchTerm } = useContext(SearchContext);

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

  useEffect(() => {
    filterProducts(selectedCategory, searchTerm);
  }, [selectedCategory, searchTerm, products]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filterProducts = (category, search) => {
    let result = [...products];

    if (category !== "All") {
      result = result.filter((p) => {
        const cat = p.category.toLowerCase();
        if (category === "Men") return cat.includes("mens");
        if (category === "Women") return cat.includes("beauty");
        if (category === "Electronics")
          return ["smartphones", "laptops", "tablets", "mobile"].some((c) =>
            cat.includes(c)
          );
        if (category === "Beauty")
          return ["beauty", "skin"].some((c) => cat.includes(c));
        if (category === "Furniture")
          return ["furniture", "home"].some((c) => cat.includes(c));
        if (category === "Groceries") return cat.includes("groceries");
        return false;
      });
    }

    if (search) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(result);
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [
          ...prev,
          { ...product, price: Math.floor(product.price * 20), qty: 1 },
        ];
      }
    });
  };

  const toggleCart = () => setShowCart((prev) => !prev);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="products-page" id="shop">
      <div className="products-container">
        <ProductCategories
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />

        <main className="products-content">
          <ProductList
            products={filteredProducts}
            loading={loading}
            addToCart={addToCart}
            cartItems={cartItems}
            handleAdd={(id) =>
              setCartItems((prev) =>
                prev.map((item) =>
                  item.id === id ? { ...item, qty: item.qty + 1 } : item
                )
              )
            }
            handleSub={(id) =>
              setCartItems((prev) =>
                prev
                  .map((item) =>
                    item.id === id ? { ...item, qty: item.qty - 1 } : item
                  )
                  .filter((item) => item.qty > 0)
              )
            }
          />
        </main>

        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          toggleCart={toggleCart}
          isOpen={showCart}
        />
      </div>
    </div>
  );
};

export default Product;
