import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=23ec9fb9";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearchInputChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        searchMovies(newSearchTerm);
    };


    const searchMovies = async (title) => {
        try {
            setLoading(true);
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();

            if (data.Error) {
                setError(data.Error);
                setMovies([]);
            } else {
                setError(null);
                setMovies(data.Search || []);
            }
        } catch (error) {
            setError('An error occurred while fetching data.');
            setMovies([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        searchMovies("Star");
    }, [])

    return (
        <div className="container pt-3">
            <h1 className="title">Movies G</h1>
            <div className="d-flex gap-2 mb-4 mb-sm-5">
                <input className="form-control form-control-sm" placeholder="Search a Movie" value={searchTerm} onChange={handleSearchInputChange} />
                <button className="btn btn-primary" onClick={() => { searchMovies(searchTerm) }}>Search</button>
            </div>

            <div className="container px-0 pb-5">
                <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-sm-4 g-2">
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : (
                        movies.map((movie) => (
                            <div className="col">
                                <MovieCard movie={movie} key={movie.imdbID} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default App;