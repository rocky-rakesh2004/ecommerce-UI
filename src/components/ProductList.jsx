import ProductCard from "./ProductCard";
import Loading from "./Loading";

const ProductList = ({ products = [], loading, addToCart, cartItems, handleAdd, handleSub }) => {
  if (loading) return <p>Loading...</p>;
  if (!products.length) return <p>No products found.</p>;

  return (
    <div className="products-grid">
      {products.map(product => (
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
  );
};


export default ProductList;
