import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

/* PAGES */
import Home from "./pages/Home";
import Character from "./pages/Character";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Comic from "./pages/Comic";

/* COMPONENTS */
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleFavorites = (event, dataId) => {
    event.preventDefault();

    const favoritesCopy = [...favorites];

    if (favoritesCopy.includes(dataId)) {
      const index = favoritesCopy.indexOf(dataId);
      favoritesCopy.splice(index, 1);
    } else {
      favoritesCopy.push(dataId);
    }

    setFavorites(favoritesCopy);
    Cookies.set("id", favorites, { expires: 7 });
  };

  //console.log(Cookies.get("id"));
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={
            <Characters
              search={search}
              handleSearch={handleSearch}
              favorites={favorites}
              handleFavorites={handleFavorites}
            />
          }
        />
        <Route path="/character/:characterId" element={<Character />} />
        <Route
          path="/comics"
          element={
            <Comics
              search={search}
              handleSearch={handleSearch}
              favorites={favorites}
              handleFavorites={handleFavorites}
            />
          }
        />
        <Route path="/comic/:comicId" element={<Comic />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
