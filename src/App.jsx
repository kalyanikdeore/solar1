// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home/Home";
// import WhatsAppPopup from "../components/PopUp/WhatsAppPopup";
import WhatsAppPopup from "./components/PopUp/WhatsAppPopup";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <WhatsAppPopup />
      </main>
      <Footer />
    </div>
  );
}

export default App;
