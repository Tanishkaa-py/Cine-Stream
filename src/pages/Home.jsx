import { useState } from "react";
import useMovies from "../hooks/useMovies";
import useDebounce from "../hooks/useDebounce";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import MoodMatcher from "../components/MoodMatcher";

function Home() {

  const [query, setQuery] = useState("Avengers");
  const [page, setPage] = useState(1);

  const debouncedQuery = useDebounce(query, 500);

  const movies = useMovies(debouncedQuery, page);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const lastRef = useInfiniteScroll(loadMore, false, true);

  return (
    <div className="home-container">

      <header className="hero-section">
        <h1>CineStream</h1>

        <p className="tagline">
          Discover movies, explore moods, and build your watchlist.
        </p>

        <SearchBar setQuery={setQuery} />
      </header>

      <section className="ai-section">
        <MoodMatcher setQuery={setQuery} />
      </section>

      <section className="movies-section">
        <h2>Trending Movies</h2>

        <MovieGrid movies={movies} lastRef={lastRef} />
      </section>

    </div>
  );
}

export default Home;