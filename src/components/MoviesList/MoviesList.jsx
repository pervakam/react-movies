import MovieCard from "../MovieCard/MovieCard";

const MoviesList = (props) => {
    const { movies = [] } = props

    return (
        <div>
            <div className="movie-list">
                {movies.length ?
                    (movies.map(movie => (<MovieCard key={movie.imdbID} title={movie.Title} src={movie.Poster} type={movie.Type} year={movie.Year}></MovieCard>))) : 
                    (<p>Ничего не найдено</p>)
                }
            </div>

        </div>
    )
}

export default MoviesList;