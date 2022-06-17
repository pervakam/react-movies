import React, {useState, useEffect} from "react";
import MoviesList from "../MoviesList/MoviesList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SeachForm/SeachForm";
import "./PageContent.scss";

const API_KEY = process.env.REACT_APP_API_KEY;

const PageContent = () => {
    const [movies, setMovies] = useState([])
    const [moviesCount, setMoviesCount] = useState('')
    const [request, setRequest] = useState("summer")
    const [movieType, setMovieType] = useState("all")
    const [loading, setLoading] = useState(true)
    const [newPage, setNewPage] = useState(2)


    const getData = (search, type, page = 1) => {
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${
                type === "all" ? "" : `&type=${type}`
            }${`&page=${page}`}`
        )
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search)
                setLoading(false)
                setMoviesCount(data.totalResults)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getMoreData = (search, type, page) => {
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${
                type === "all" ? "" : `&type=${type}`
            }${`&page=${page}`}`
        )
            .then((response) => response.json())
            .then((data) => {
                const newData = [...movies, ...data.Search]
                setMovies(newData)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const addMoreData = () => {
        setNewPage(prevPage => prevPage + 1)
        getMoreData(request, movieType,newPage)
    }

    const fillRequest = (request, type, page) => {
        setLoading(true)
        getData(request, type, page);
    };

    const searchMovieByType = (evt) => {
        setMovieType(evt.target.value)
        fillRequest(request, evt.target.value);
    };

    const searchMovie = (evt) => {
        setRequest(evt.target.value)
    };

    const searchMovieByKey = (evt) => {
        if (evt.key === "Enter") {
            evt.preventDefault();
            fillRequest(request, movieType);
        }
    };

    useEffect(() => {
        getData(request, movieType);
    }, [request, movieType])

    return (
        <main className="page-main content">
            <SearchForm
                request={request}
                movieType={movieType}
                fillRequest={fillRequest}
                searchMovieByType={searchMovieByType}
                searchMovieByKey={searchMovieByKey}
                searchMovie={searchMovie}
            ></SearchForm>
            <h2>Список фильмов</h2>
            <p>
                (всего <span>{moviesCount}</span>)
            </p>
            {loading ? (
                <Preloader></Preloader>
            ) : (
                <MoviesList movies={movies}></MoviesList>
            )}
            <button className="btn brown darken-3" onClick={() => addMoreData()}>Показать ещё</button>
        </main>
    );

}

export default PageContent;
