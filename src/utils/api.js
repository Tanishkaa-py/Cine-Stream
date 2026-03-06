import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query, page = 1) => {

  try {

    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: query,
        page: page
      }
    });

    if (response.data.Response === "False") {
      return [];
    }

    return response.data.Search;

  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};