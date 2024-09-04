import logo from "../assets/marvel-logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="icons-menu">
        <button>Characters</button>
        <button>Comics</button>

        <Link to="/">
          <img src={logo} alt="logo marvel" />
        </Link>
        <button>Favoris</button>
        <button>S'inscrire</button>
      </nav>
    </header>
  );
};

export default Header;
