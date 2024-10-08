import logo from "../assets/marvel-logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";

import "./css/Header.css";
import { useState } from "react";
const Header = ({ burgerMenuIsOpen, toggleMenuBurger }) => {
  return (
    <header>
      <nav className="nav-menu">
        <div className="burger-menu-container">
          <GiHamburgerMenu className="burger-menu" onClick={toggleMenuBurger} />
          <div className={burgerMenuIsOpen ? "show" : "hidden"}>
            <IoIosCloseCircle
              className="close-button"
              onClick={toggleMenuBurger}
            />
            <Link to="/characters" onClick={toggleMenuBurger}>
              <button>Characters</button>
            </Link>
            <Link to="/comics" onClick={toggleMenuBurger}>
              <button>Comics</button>
            </Link>

            <button>Favorite</button>
            <button>Sign in</button>
            <button>Login</button>
          </div>
        </div>
        <div className="main-menu">
          <Link to="/characters">
            <button>Characters</button>
          </Link>
          <Link to="/comics">
            <button>Comics</button>
          </Link>
          <Link to="/">
            <img src={logo} alt="logo marvel" />
          </Link>
          <button>Favorite</button>
          <button>Sign in</button>
          <button>Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
