import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MovieDetail from "./pages/movieDetail/MovieDetail";
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="movies/:type" element={<Home />}></Route>
                    <Route path="movie/:id" element={<MovieDetail />}></Route>
                    <Route path="/*" element={<h1>Error Page</h1>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
