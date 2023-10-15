import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/movies/popular">popular</Link>
                    <Link to="/movies/top_rated">top rated</Link>
                    <Link to="/movies/upcoming">Up coming</Link>
                </li>
            </ul>
        </div>
    );
}
