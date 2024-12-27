import React, { useState } from 'react';

function MovieCard({ movie, buttonText, buttonAction }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    // Открывать модальное окно только если клик был не на кнопке
    if (!e.target.closest('button')) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="movie-card" onClick={openModal}>
        <img
          src={https://image.tmdb.org/t/p/w200${movie.poster_path}}
          alt={movie.title}
        />
        <h3>{movie.title}</h3>
        {/* Кнопка "Add to Favorites" для добавления в избранное */}
        <button onClick={(e) => {
          e.stopPropagation(); // Чтобы не сработало открытие модального окна
          buttonAction();
        }}>
          {buttonText}
        </button>
      </div>

      {/* Модальное окно с подробной информацией о фильме */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <img
              src={https://image.tmdb.org/t/p/w200${movie.poster_path}}
              alt={movie.title}
            />
            <div className="info">
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <p><strong>Release Date:</strong> {movie.release_date}</p>
              <p><strong>Rating:</strong> {movie.vote_average}</p>
            </div>
            <button className="close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
