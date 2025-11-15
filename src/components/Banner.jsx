import React, { useContext } from "react";
import ProductSearch from "./ProductSearch";
import { SearchContext } from "./SearchContext";

const Banner = () => {
  const { searchTerm, setSearchTerm , onSearch} = useContext(SearchContext);

  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Shop Smarter</h1>
        <p className="banner-subtitle">
          Discover top deals and fast delivery on everything you need.
        </p>
        <ProductSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default Banner;
