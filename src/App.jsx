import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/Banner.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Contact from "./components/Contact";


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`app ${darkMode ? "dark-mode" : ""}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<HomePage />}>
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
