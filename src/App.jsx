import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  return (
    <Router>
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/characters" element={<Characters search={search} />} />
        <Route path="/character/:characterId" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comic/:comicId" element={<Comic />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
