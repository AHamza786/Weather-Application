import React from "react";
import "./Container.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import { Routes, Route} from "react-router-dom";

function Container() {
  return (
    <div className="container">
      <Header />
      <Routes>
          <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Container;
