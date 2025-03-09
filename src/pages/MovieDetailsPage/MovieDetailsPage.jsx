import { useEffect, useState } from "react";
import { HiArrowLeft } from 'react-icons/hi';
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { getMovieDetails, getImageUrl } from "../../tmdb-api";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();

    const backLinkHref = location.state?.from ?? "/movies";


    useEffect(() => {
        getMovieDetails(movieId)
            .then(setMovie)
            .catch(console.error);
    }, [movieId]);

    if (!movie) return (
        <main>
            <p>Loading...</p>
        </main>
    );

    return (
        <main>
            <Link to={backLinkHref}>
                <HiArrowLeft size="12" /> Go back
            </Link>

            <div className={styles.mainInfoWithImage}>
                <img src={getImageUrl(movie.poster_path)} alt={movie.title} width="300" />
                <div className={styles.mainInformation}>
                    <h1>{movie.title}</h1>
                    <p>User Score: {movie.vote_average}</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    <p>{movie.genres.map(({name}) => name).join(", ")}</p>
                </div>
            </div>

            <div className={styles.additionalInformation}>
                <h4>Additional information</h4>
                <ul>
                    <li><Link to="cast" state={{ from: backLinkHref }}>Cast</Link></li>
                    <li><Link to="reviews" state={{ from: backLinkHref }}>Reviews</Link></li>
                </ul>
            </div>

            <Outlet />
        </main>
    );
};

export default MovieDetailsPage;