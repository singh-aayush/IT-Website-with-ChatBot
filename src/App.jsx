import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import ContactUs from "./components/contactus.jsx";
import Services from "./components/service.jsx";
import Portfolio from "./components/portfolio.jsx";
import Layout from "./components/layout.jsx";
import "../src/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Home page */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service" element={<Services />} /> {/* Services page */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
