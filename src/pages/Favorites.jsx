import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Favorites() {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(saved);
  }, []);

  return (
    <div>
      <h2>My Favorites</h2>

      <div className="grid">
        {favorites.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;