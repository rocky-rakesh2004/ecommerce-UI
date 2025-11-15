import { useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { SearchContext } from "./SearchContext";

const ProductSearch = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="product-search">
      <input
        type="text"
        placeholder="Search Products..."
        value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => onSearch(searchTerm)}><Link to="#shop">Search</Link></button>
    </div>
  );
};

export default ProductSearch;
