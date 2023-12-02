import './MovieCard.css'

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card h-100 overflow-hidden rounded">
            <div className='img-box h-100'>
                <img className='h-100 w-100 object-fit-cover' src={movie.Poster} alt={movie.Title} />
            </div>
            <div className='movie-details'>
                <span>{movie.Title}</span>
                <span>{movie.Year}</span>
                <span>{movie.Type}</span>
            </div>
        </div>
    )
};


export default MovieCard;