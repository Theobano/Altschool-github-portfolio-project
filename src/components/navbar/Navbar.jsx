import React, { useContext, useEffect } from "react";
import { userResource } from "../../App";
import { userDataContext } from "../../contexts";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import "./Navbar.css";

function NavBar() {
  const [userData, setUserData] = useContext(userDataContext);
  useEffect(() => {
    userResource.then((res) => {
      setUserData(res);
    });
  }, [setUserData]);
  return (
    <div className="navbar">
      <div>
        <div>
          <img
            src={userData?.avatar_url}
            alt="avatar"
            className="avatar"
            height={30}
            width={30}
          />
        </div>
        <div>{userData?.login ?? "Theobano"}</div>
      </div>
      <HamburgerButton />
    </div>
  );
}

export default NavBar;
