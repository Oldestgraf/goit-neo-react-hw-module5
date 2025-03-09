import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../tmdb-api";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./HomePage.module.css"


const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies()
            .then(setMovies)
            .catch(console.error);
    }, []);

    return (
        <main>
            <h1>Trending today</h1>
            <MovieList movies={movies} />
        </main>
    );
};

export default HomePage;