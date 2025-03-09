import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css"

const NotFoundPage = () => {
    return (
        <main>
            <h1>404 - Page not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link to="/" className={styles.link}>Go Home</Link>
        </main>
    )
}

export default NotFoundPage;