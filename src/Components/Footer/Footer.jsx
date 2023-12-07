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
        by Malik
      </p>
    </footer>
  );
}

export default Footer;
