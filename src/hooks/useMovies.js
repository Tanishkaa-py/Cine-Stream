import { useState, useEffect } from "react";
import { searchMovies } from "../utils/api";

function useMovies(query, page) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const loadMovies = async () => {

      const searchQuery = query || "Avengers";

      const results = await searchMovies(searchQuery, page);

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