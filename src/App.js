import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import "./App.css";
import Home from "./componets/pages/home/Home";
import About from "./componets/pages/about/About";
import Blog from "./componets/pages/blog/Blog";
import Navbar from "./componets/navbar/Navbar";
import Footer from "./componets/footer/Footer";
import Servisec from "./componets/pages/services/Servisec";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Servisec" element={<Servisec />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
