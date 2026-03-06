function SearchBar({ setQuery }) {
    return (
      <input
        type="text"
        placeholder="Search movies..."
        onChange={(e) => setQuery(e.target.value)}
      />
    );
  }
  
  export default SearchBar;