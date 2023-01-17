import React from "react";
import "./Container.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import About from "../About/About";
import Github from "../Github/Github";
import { Routes, Route} from "react-router-dom";

function Container() {
  return (
    <div className="container">
      <Header />
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="github" element={<Github />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Container;
