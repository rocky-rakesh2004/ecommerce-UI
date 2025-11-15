import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or was moved.</p>

      <Link to="/" className="error-btn">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
