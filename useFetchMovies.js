import { useState, useEffect } from 'react';

function useFetchMovies(initialUrl) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${initialUrl}&page=${page}`);
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        const filtered = data.results.filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setMovies((prevMovies) => (page === 1 ? filtered : [...prevMovies, ...filtered]));
        setHasMore(data.page < data.total_pages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [initialUrl, page, searchTerm]);

  return { movies, setSearchTerm, loading, error, hasMore, loadNextPage: () => setPage((prev) => prev + 1) };
}

export default useFetchMovies;


