import "../styles/Banner.css";
import { HashLink as Link } from "react-router-hash-link";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Shop Smarter</h1>
        <p className="banner-subtitle">
          Discover top deals and fast delivery on everything you need.
        </p>
        <Link smooth to="#shop" className="banner-btn">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
