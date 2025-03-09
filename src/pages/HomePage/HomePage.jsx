import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../tmdb-api";
import MovieList from "../../components/MovieList/MovieList";


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
            <MovieList movies={movies} from="/" />
        </main>
    );
};

export default HomePage;