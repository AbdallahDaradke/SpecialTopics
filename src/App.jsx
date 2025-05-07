// import App from "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import Movies from "./Components/Movies.jsx";
import Details from "./Components/Details.jsx";
import Topnav from "./Components/Topnav.jsx";

import Home from "./Components/Home.jsx";
function App() {
  return (
    <div>
      <Router>
        <Topnav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/details" element={<Details />} />
            <Route path="/details/:id/:title" element={<Details />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
            {/* <Route path="/moviesdetails" element={<MoviesDetails />} /> */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
