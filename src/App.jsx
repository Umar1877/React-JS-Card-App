import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes,Route,Navigate } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
const App = () => {
    return (
      <>
      <Navbar/>
            <Routes>
                <Route exact="true" path="/" element={<Home />} />
                <Route exact="true" path="/about" element={<About />} />
                <Route exact="true" path="/service" element={<Services />} />
                <Route exact="true" path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer/>  
      </>
    );
};

export default App;
