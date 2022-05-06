import "./SearchForm.scss";

const SearchForm = (props) => {
  const { request, searchMovie, searchMovieByType, movieType, fillRequest, searchMovieByKey } =
    props;

  return (
    <form className="search-form col s12">
      <div className="row">
        <div className="input-field col s12">
          <input
            id="search"
            type="search"
            className="validate"
            placeholder="Поиск фильмов"
            value={request}
            onChange={(evt) => searchMovie(evt)}
            onKeyDown={(evt) => searchMovieByKey(evt)}
          ></input>
          <label htmlFor="search" className="visually-hidden">
            Поиск фильмов
          </label>

          <button
            className={
              request.length
                ? "btn brown darken-3"
                : "btn brown darken-3 disabled"
            }
            type="button"
            onClick={() => fillRequest(request, movieType)}
          >
            Найти
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col s2">
          <label>
            <input
              type="radio"
              name="type"
              className="with-gap"
              value="all"
              onChange={(evt) => searchMovieByType(evt)}
              checked={movieType === "all"}
            ></input>
            <span>All</span>
          </label>
        </div>
        <div className="col s2">
          <label>
            <input
              type="radio"
              name="type"
              className="with-gap"
              value="movie"
              onChange={(evt) => searchMovieByType(evt)}
              checked={movieType === "movie"}
            ></input>
            <span>Movies</span>
          </label>
        </div>
        <div className="col s2">
          <label>
            <input
              type="radio"
              name="type"
              className="with-gap"
              value="series"
              onChange={(evt) => searchMovieByType(evt)}
              checked={movieType === "series"}
            ></input>
            <span>series</span>
          </label>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
