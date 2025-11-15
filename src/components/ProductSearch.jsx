import React from "react";

const ProductSearch = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <div className="product-search">
      <input
        type="text"
        placeholder="Search Products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default ProductSearch;
