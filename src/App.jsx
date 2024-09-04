import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* PAGES */
import Home from "./pages/Home";
import Character from "./pages/Character";

/* COMPONENTS */
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:characterId" element={<Character />} />
      </Routes>
    </Router>
  );
};

export default App;
