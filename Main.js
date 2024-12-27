import React from 'react';
import MovieCard from './MovieCard';
import useFetchMovies from './useFetchMovies';

function Main({ addToFavorites }) {
  const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=908d79617d87b685b2f06e4b685ecab2';
  
  // Хук для получения фильмов и состояния поиска
  const { movies, setSearchTerm, loading, error, hasMore, loadNextPage } = useFetchMovies(apiUrl);

  return (
    <main className="app-main">
      {/* Поле для поиска */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          onChange={(e) => setSearchTerm(e.target.value)} // Обновление состояния поиска
        />
      </div>

      {/* Список фильмов */}
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              buttonText="Add to Favorites"
              buttonAction={() => addToFavorites(movie)} // Добавление в избранное
            />
          ))
        ) : (
          <p>No movies found.</p> // Сообщение, если фильмы не найдены
        )}
      </div>

      {/* Кнопка "Load More", если есть еще фильмы */}
      {hasMore && !loading && (
        <div className="load-more">
          <button onClick={loadNextPage}>Load More</button>
        </div>
      )}

      {/* Сообщение о загрузке */}
      {loading && <p>Loading...</p>}

      {/* Сообщение об ошибке */}
      {error && <p>Error: {error}</p>}
    </main>
  );
}

export default Main;
