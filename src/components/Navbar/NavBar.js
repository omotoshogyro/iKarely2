import React, { useEffect, useState } from "react";
import "./NavBar.css";
import SearchIcon from "@material-ui/icons/Search";

function NavBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar__content ${show && "nav__bg"}`}>
      <div className="logo">
        <img src='images/logo.png' alt="" />
      </div>

      <div className="navbar__links">
        <ul>
          <li className="navbar__menus">Home</li>
          <li className="navbar__menus">Services</li>
          <li className="navbar__menus">iShop</li>
          <li className="navbar__menus">About us</li>
          <li className="navbar__menus">Contact us</li>
          <li className="navbar__menus">Sign Up</li>
          <li className="navbar__menus">Sign In</li>
          <li className="searchicon">
            <SearchIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
