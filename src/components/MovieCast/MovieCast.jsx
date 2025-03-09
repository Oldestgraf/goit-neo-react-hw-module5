import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits, getImageUrl } from "../../tmdb-api";
import styles from "./MovieCast.module.css"

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        getMovieCredits(movieId)
            .then(setCast)
            .catch(console.error);
    }, [movieId]);

    return (
        <ul>
            {cast.map(({ id, name, character, profile_path }) => (
                <li className={styles.castCard} key={id}>
                    <img src={getImageUrl(profile_path)} alt={name} width="100" />
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>
            ))}
        </ul>
    );
};

export default MovieCast;