import React from "react";

const ProductCategories = ({ categories, selectedCategory, onCategoryClick }) => {
  return (
    <aside className="category-sidebar">
      <h2>Categories</h2>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
          onClick={() => onCategoryClick(cat)}
        >
          {cat}
        </button>
      ))}
    </aside>
  );
};

export default ProductCategories;
