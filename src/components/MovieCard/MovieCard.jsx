import './MovieCard.scss';

const MovieCard = (props) => {
  const { title, src, type, year } = props

  return (
    <div className="movie-card">
      <div className="movie-card__image grey lighten-4">
        {src !== "N/A" ? <img src={src} alt={title}></img> : <p>нет изображения</p>}
        
      </div>
      <div className="movie-card__content">
        <h5>{title}</h5>
        <div className="movie-card__description">
          <span className="movie-card__content-year">{year}</span>
          {type === "movie" ? <span className="movie-card__content-type movie-card__content-type--movie">{type}</span> : ""}
          {type === "series" ? <span className="movie-card__content-type movie-card__content-type--series">{type}</span> : ""}
          {type === "episode" ? <span className="movie-card__content-type movie-card__content-type--episode">{type}</span> : ""}
          {type === "game" ? <span className="movie-card__content-type movie-card__content-type--game">{type}</span> : ""}
        </div>
      </div>
    </div>

  )
}

export default MovieCard;