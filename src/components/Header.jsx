import logo from "../assets/marvel-logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import "./css/Header.css";
const Header = () => {
  return (
    <header>
      <nav className="nav-menu">
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
        <div className="search-container">
          <button
            onClick={() => {
              console.log("cliqué");
            }}
          >
            <FaSearch className="search-icon" />
          </button>
          <input type="search" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
