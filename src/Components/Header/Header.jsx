import React from "react";
import "./Header.css";
import Logo from "../../Images/PartlyCloudy.svg";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";


function Header() {
  function showMenu() {
    let x = document.getElementById("myoptions");
    if (x.style.display === "block") {
      x.style.display = "none";
      console.log("None");
    } else {
      x.style.display = "block";
      console.log("Block");
    }
  }
  return (
    <header className="topHeader">
      
      <div className="title">
        <img src={Logo} alt="Icon" />
        <p><Link to="/">Weather by VicBox</Link></p>
      </div>
      <div className="options" id="myoptions">
        <ul>
          <li><Link to="github">Github</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
      </div>
      <div className="toggle">
        <FaAlignJustify id="btn" onClick={showMenu} />
      </div>
    </header>
  );
}

export default Header;
