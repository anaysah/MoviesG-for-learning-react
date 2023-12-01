const MovieCard = ( {movie} ) => {
    return (
        <div className="movie-card">
            <img src={movie.Poster} alt={movie.Title} height={200} />
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <p>{movie.Type}</p>
            
        </div>
    )
};


export default MovieCard;