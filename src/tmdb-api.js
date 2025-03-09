import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGRmYThkYTIxN2JiZDJjOTczMzE5YzBiOWVhMDk2OCIsIm5iZiI6MTc0MTE4Mzk0MC42ODk5OTk4LCJzdWIiOiI2N2M4NWJjNDgyMWMxOWI1ZWJlNmZmZjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GsqGQvJuhs5fBajX4pVoShouuBpYtTSxZm70OY12-s4",
        "Content-Type": "application/json"
    },
});

export const getTrendingMovies = async () => {
    const response = await api.get("/trending/movie/day");
    return response.data.results;
};

export const searchMovies = async (query) => {
    const response = await api.get("/search/movie", {
        params: { query, include_adult: false, language: "en-US", page: 1 },
    });
    return response.data.results;
};

export const getMovieDetails = async (movieId) => {
    const response = await api.get(`/movie/${movieId}`, {
        params: { language: "en-US" }
    });
    return response.data;
};

export const getMovieCredits = async (movieId) => {
    const response = await api.get(`/movie/${movieId}/credits`);
    return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
    const response = await api.get(`/movie/${movieId}/reviews`);
    return response.data.results;
}

export const getImageUrl = (path) => {
  return path 
    ? `${IMAGE_BASE_URL}${path}` 
    : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
};