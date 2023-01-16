import React from "react";
import "./Header.css";
import Logo from "../../Images/PartlyCloudy.svg";
import { FaAlignJustify } from "react-icons/fa";

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
        <p>Weather by VicBox</p>
      </div>
      <div className="options" id="myoptions">
        <ul>
          <li>Github</li>
          <li>About</li>
        </ul>
      </div>
      <div className="toggle">
        <FaAlignJustify id="btn" onClick={showMenu} />
      </div>
    </header>
  );
}

export default Header;
