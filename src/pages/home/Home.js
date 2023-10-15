import Header from "../../components/header/Header";
import MovieList from "../../components/movieList/MovieList";

export default function Home() {
    return (
        <div className="home">
            <Header />
            <MovieList />
        </div>
    );
}
