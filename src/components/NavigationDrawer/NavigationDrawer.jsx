import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navigationContext } from "../../contexts";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import ToggleThemeButton from "../ToggleThemeButton";
import "./NavigationDrawer.css";

function NavigationDrawer() {
  const [navIsOpen, setNavIsOpen] = useContext(navigationContext);

  // useEffect(() => {

  // })

  return (
    <div className={`navigation  ${navIsOpen ? "show-navigation" : ""}`}>
      <div className="nav-links">
        <div className="hamburger-container">
          <HamburgerButton />
        </div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/repos"}>Repositories</NavLink>
        <NavLink to={"/testerror"}>Test Error</NavLink>
      </div>
      <div>
        <ToggleThemeButton/>
      </div>
    </div>
  );
}

export default NavigationDrawer;
