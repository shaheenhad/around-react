import React from "react";
import logoPath from "../images/around_logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logoPath} alt="around the us logo" />
    </header>
  );
}

export default Header;
