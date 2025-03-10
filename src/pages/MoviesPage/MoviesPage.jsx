import { useEffect, useState } from "react";
import { searchMovies } from "../../tmdb-api";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css"

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams(); 

    const query = searchParams.get("query") || "";

    useEffect(() => {
        if (!query) return;

        searchMovies(query)
            .then(setMovies)
            .catch(console.error);
    }, [query]);

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const searchQuery = form.elements.query.value.trim();

        if (!searchQuery) return;

        setSearchParams({ query: searchQuery });
        form.reset();
    };

    return (
        <main>
            <form className={styles.searchForm} onSubmit={handleSearch}>
                <input className={styles.searchField} type="text" name="query" defaultValue={query}  placeholder="Search movies..." />
                <button className={styles.submitBtn} type="submit">Search</button>
            </form>
            {movies.length > 0 && <MovieList movies={movies} from={`/movies?query=${query}`} />}
        </main>
    );
};

export default MoviesPage;