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

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={<Characters search={search} handleSearch={handleSearch} />}
        />
        <Route path="/character/:characterId" element={<Character />} />
        <Route
          path="/comics"
          element={<Comics search={search} handleSearch={handleSearch} />}
        />
        <Route path="/comic/:comicId" element={<Comic />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
