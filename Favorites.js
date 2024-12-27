import React from 'react';
import MovieCard from './MovieCard';

function Favorites({ favorites, removeFromFavorites }) {
  return (
    <main className="app-main">
      <h2>Your Favorites</h2>
      <div className="movie-list">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              buttonText="Remove"
              buttonAction={() => removeFromFavorites(movie.id)}
            />
          ))
        ) : (
          <p>No favorites yet.</p>
        )}
      </div>
    </main>
  );
}

export default Favorites;


