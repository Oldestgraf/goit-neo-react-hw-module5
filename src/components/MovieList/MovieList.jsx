import { Link } from "react-router-dom";

const MovieList = ({ movies, from }) => {
    return (
        <ul>
            {movies.map(({ id, title }) => (
                <li key={id}>
                    <Link to={`/movies/${id}`} state={{ from }}>
                        {title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default MovieList;