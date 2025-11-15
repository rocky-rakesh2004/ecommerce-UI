import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} E-Shop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
