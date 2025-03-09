import { useState } from "react";
import { searchMovies } from "../../tmdb-api";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css"

const MoviesPage = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        try {
            const results = await searchMovies(query);
            setMovies(results)
        } catch (error) {
            console.error(error);
        };

    };

    return (
        <main>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <input className={styles.searchField} type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search movies..." />
                <button className={styles.submitBtn} type="submit">Search</button>
            </form>
            <MovieList movies={movies}/>
        </main>
    );
};

export default MoviesPage;