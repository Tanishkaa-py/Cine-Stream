import MovieCard from "./MovieCard";
import "./MovieGrid.css";

function MovieGrid({ movies = [], lastRef }) {

  return (
    <div className="grid">

      {movies.map((movie, index) => {

        if (movies.length === index + 1) {
          return (
            <div ref={lastRef} key={movie.imdbID}>
              <MovieCard movie={movie} />
            </div>
          );
        }

        return (
          <MovieCard
          key={`${movie.imdbID}-${index}`}
            movie={movie}
          />
        );

      })}

    </div>
  );
}

export default MovieGrid;