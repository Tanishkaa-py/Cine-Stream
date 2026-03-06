import { useState, useEffect } from "react";
import { fetchPopularMovies, searchMovies } from "../utils/api";

function useMovies(query, page) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const loadMovies = async () => {
      let results;

      if (query) {
        results = await searchMovies(query, page);
      } else {
        results = await fetchPopularMovies(page);
      }

      if (page === 1) {
        setMovies(results);
      } else {
        setMovies((prev) => [...prev, ...results]);
      }
    };

    loadMovies();

  }, [query, page]);

  return movies;
}

export default useMovies;