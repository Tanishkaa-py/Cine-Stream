import { useState } from "react";

import useMovies from "../hooks/useMovies";
import useDebounce from "../hooks/useDebounce";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import MoodMatcher from "../components/MoodMatcher";
function Home() {

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const debouncedQuery = useDebounce(query, 500);

  const movies = useMovies(debouncedQuery, page);

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  const lastRef = useInfiniteScroll(loadMore);

  return (
    <div>

      <h1>CineStream</h1>

      <SearchBar setQuery={setQuery} />
      <MoodMatcher setQuery={setQuery} />
      <MovieGrid movies={movies} lastRef={lastRef} />

    </div>
  );
}

export default Home;