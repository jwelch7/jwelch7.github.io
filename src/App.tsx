// import { useState } from 'react'

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CocktailHome from "./pages/cocktails/CocktailHome";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail" element={<CocktailHome />} />
      </Routes>
    </Router>
  );
};

export default App;
