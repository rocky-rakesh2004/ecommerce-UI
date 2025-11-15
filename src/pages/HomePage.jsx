import Banner from "../components/Banner";
import Features from "../components/Features";
import Product from "../components/Product";
import { SearchProvider } from "../components/SearchContext";

const HomePage = () => {
  return (
    <SearchProvider>
      <Banner />
      <Features />
      <Product />
    </SearchProvider>
  );
};

export default HomePage;
