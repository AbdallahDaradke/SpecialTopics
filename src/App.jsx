// import App from "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Movies from "./Components/Movies.jsx";
import MovieDetails from "./Components/MovieDetails.jsx";

import Home from "./Components/Home.jsx";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/moviedetails" element={<MovieDetails />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
