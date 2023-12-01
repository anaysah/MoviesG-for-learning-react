import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

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
        <div>
            <h1>Movies G</h1>
            <input placeholder="Search a Movie" value={searchTerm} onChange={handleSearchInputChange} />
            <button onClick={() => { searchMovies(searchTerm) }}>Search</button>

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.imdbID} />
                ))
            )}
        </div>
    )
}

export default App;