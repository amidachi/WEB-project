import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Favorites from './Favorites';
import MovieCard from './MovieCard';
import './index.css';

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    if (favorites.find((fav) => fav.id === movie.id)) {
      alert('This movie is already in your favorites!');
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFromFavorites = (movieId) => {
    setFavorites(favorites.filter((fav) => fav.id !== movieId));
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main addToFavorites={addToFavorites} />} />
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

