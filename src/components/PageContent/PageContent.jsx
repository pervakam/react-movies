import React from "react";
import MoviesList from "../MoviesList/MoviesList";
import Preloader from "../Preloader/Preloader";
import Pagination from "../Pagination/Pagination";
import SearchForm from "../SeachForm/SeachForm";

const API_KEY = process.env.REACT_APP_API_KEY;

class PageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      moviesCount: "",
      request: "summer",
      movieType: "all",
      loading: true,
    };
  }

  getData = (search, type, page = 1) => {
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${
        type === "all" ? "" : `&type=${type}`
      }${`&page=${page}`}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.Search,
          loading: false,
          moviesCount: data.totalResults,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getData(this.state.request, this.state.movieType);
  }

  fillRequest = (request, type, page) => {
    this.setState({ loading: true });
    this.getData(request, type, page);
  };

  searchMovieByType = (evt) => {
    this.setState(
      () => ({ movieType: evt.target.value }),
      () => {
        this.fillRequest(this.state.request, this.state.movieType);
      }
    );
  };

  searchMovie = (evt) => {
    this.setState({ request: evt.target.value });
  };

  searchMovieByKey = (evt) => {
    if (evt.key === "Enter") {
      evt.preventDefault();
      this.fillRequest(this.state.request, this.state.movieType);
    }
  };

  render() {
    return (
      <main className="page-main content">
        <SearchForm
          request={this.state.request}
          movieType={this.state.movieType}
          fillRequest={this.fillRequest}
          searchMovieByType={this.searchMovieByType}
          searchMovieByKey={this.searchMovieByKey}
          searchMovie={this.searchMovie}
        ></SearchForm>
        <h2>Список фильмов</h2>
        <p>
          (всего <span>{this.state.moviesCount}</span>)
        </p>
        {this.state.loading ? (
          <Preloader></Preloader>
        ) : (
          <MoviesList movies={this.state.movies}></MoviesList>
        )}
        <Pagination
          moviesCount={this.state.moviesCount}
          fillRequest={this.fillRequest}
          request={this.state.request}
          movieType={this.state.movieType}
        ></Pagination>
      </main>
    );
  }
}

export default PageContent;
