import logo from "../assets/marvel-logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import "./css/Header.css";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuBurger = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <header>
      <nav className="nav-menu">
        <GiHamburgerMenu className="burger-menu" onClick={toggleMenuBurger} />

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
      </nav>
    </header>
  );
};

export default Header;
