import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FeaturedRecipes from "./components/FeaturedRecipes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Favorites from "./components/Favorites";
import About from "./components/About";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";
import SearchedPage from "./components/SearchedPage";

function App() {
  const [showFeatured, setShowFeatured] = useState(true)
  return (
    <div>
      <Router>
        <Navbar setShowFeatured={setShowFeatured}/>
        <SearchBar setShowFeatured={setShowFeatured}/>
        <Routes>
          <Route path="/" element={showFeatured ?<FeaturedRecipes />:null} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/searched" element={<SearchedPage/>}/>
        </Routes>
      </Router>
      <About />
      <Footer/>
    </div>
  );
}

export default App;
