import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* PAGES */
import Home from "./pages/Home";
import Character from "./pages/Character";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";

/* COMPONENTS */
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character/:characterId" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
};

export default App;
