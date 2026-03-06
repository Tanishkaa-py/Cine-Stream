import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

// default movies for homepage
const DEFAULT_SEARCH = "avengers";

export const fetchPopularMovies = async (page = 1) => {
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: DEFAULT_SEARCH,
        page: page,
      },
    });

    if (res.data.Response === "False") {
      return [];
    }

    return res.data.Search || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const searchMovies = async (query, page = 1) => {
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: query,
        page: page,
      },
    });

    if (res.data.Response === "False") {
      return [];
    }

    return res.data.Search || [];
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};