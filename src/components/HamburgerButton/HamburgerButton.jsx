import React, { useContext } from "react";
import { navigationContext } from "../../contexts";
import "./HamburgerButton.css";

function HamburgerButton() {
  const [navIsOpen, setNavIsOpen] = useContext(navigationContext);
  return (
    <button
      className={`hamburger-button ${navIsOpen ? "change-hamburger" : ""}`}
      onClick={() => {
        setNavIsOpen((prev) => !prev);
      }}
    >
      <div className="icon-bar"></div>
      <div className="icon-bar"></div>
      <div className="icon-bar"></div>
    </button>
  );
}

export default HamburgerButton;
