import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearch = (products) => {
    if (!searchTerm) return products;
    return products.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, onSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
