import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=23ec9fb9";

// const movie1 = {
//     "Title": "Star Wars: Episode IV - A New Hope",
//     "Year": "1977",
//     "imdbID": "tt0076759",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
// }

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("Star");
    }, [])

    return (
        <div>
            <h1>Movies G</h1>
            <input placeholder="Search a Movie" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}} />
            <button onClick={() => {searchMovies(searchTerm) }}>Search</button>

            {/* <MovieCard Title={movie1.Title}  Year = {movie1.Year} Type={movie1.Type} Poster={movie1.Poster}/> */}
            {/* <MovieCard movie={movies[2]}/> */}

            {
                movies?.length > 0 ? (
                    <div>
                        {
                            // movies.map((movie) => {
                            //     return <MovieCard movie={movie} key={movie.imdbID} />
                            // })
                            movies.map((movie) => (
                                <MovieCard movie={movie} key={movie.imdbID} />
                            ))

                        }
                    </ div >
                ) : (
                    <div>
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
        </div>
    )
}

export default App;