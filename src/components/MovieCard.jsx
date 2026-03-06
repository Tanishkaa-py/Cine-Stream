import { FaHeart } from "react-icons/fa";
import "./MovieCard.css";

function MovieCard({ movie }) {

  const addFavorite = () => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = favorites.find(
      (fav) => fav.imdbID === movie.imdbID
    );

    if (!exists) {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  return (
    <div className="movie-card">

      <img
        loading="lazy"
        src={
          movie.Poster && movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.Title}
      />

      <h3>{movie.Title}</h3>

      <p>{movie.Year}</p>

      <FaHeart className="favorite-icon" onClick={addFavorite} />
      <FaHeart
        style={{ cursor: "pointer", color: "red" }}
        onClick={addFavorite}
      />

    </div>
  );
}

export default MovieCard;