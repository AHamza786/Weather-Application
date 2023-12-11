import React from "react";
import "./Header.css";
import Logo from "../../Images/PartlyCloudy.svg";
import { Link } from "react-router-dom";


function Header() {
  
  return (
    <header className="topHeader">   
      <div className="title">
        <img src={Logo} alt="Icon" />
        <p><Link to="/">Weather by VicBox</Link></p>
      </div>
    </header>
  );
}

export default Header;
