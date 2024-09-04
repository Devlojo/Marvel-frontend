import logo from "../assets/marvel-logo.jpg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo marvel" />
      <nav className="icons-menu">
        <button>Characters</button>
        <button>Comics</button>
        <button>Favoris</button>
      </nav>
    </header>
  );
};

export default Header;
