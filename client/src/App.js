import React from "react";
import { Route, Routes, Link } from "react-router-dom";

//& Importing the SASS styles.
import "./styles/styles.css";

//^ importing Routes
import Home from "./views/Home/Home.view.js";
import Itunes from "./views/Itunes/Itunes.view.js";
import Fav from "./views/Fav/Fav.view.js";

export default function App() {
  return (
    <div id="APP">
      <header className="title-container">
        <div className="title-container">
          <div className="title">
            <h1>Express iTunes API</h1>
          </div>
        </div>

        {/* The link titles for React Router */}
        <div className="link-section">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/post">iTunes</Link>
          <Link to="/get">Favourites</Link>
        </div>
      </header>
      {/* Were the vies from 'src/views' will be displayed */}
      <div className="body-container">
        <Routes className="routes-section">
          <Route exact path="/" element={<Home />} />
          <Route path="/post" element={<Itunes />} />
          <Route path="/get" element={<Fav />} />
        </Routes>
      </div>
    </div>
  );
}
