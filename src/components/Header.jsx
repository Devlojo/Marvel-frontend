import logo from "../assets/marvel-logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import "./css/Header.css";
const Header = ({ search, setSearch }) => {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <header>
      <nav className="nav-menu">
        <Link to="/characters">
          <button>Characters</button>
        </Link>
        <Link to="/comics">
          <button>Comics</button>
        </Link>
        <button>Favorite</button>

        <button>Sign in</button>
        <button>Login</button>
        <Link to="/">
          <img src={logo} alt="logo marvel" />
        </Link>

        <div className="search-container">
          <input
            type="search"
            placeholder="ex : Hulk"
            onChange={handleSearch}
            value={search}
          />

          <FaSearch
            className="search-icon"
            onClick={() => {
              console.log("cliqué");
            }}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
