import React from "react";
import "./Footer.css";
import Heart from "../../Images/heart.svg";

function Footer() {
  return (
    <footer>
      <p>
        Made with{" "}
        <span>
          <img src={Heart} alt="heart" />
        </span>{" "}
        by Victor Alvarado
      </p>
    </footer>
  );
}

export default Footer;
