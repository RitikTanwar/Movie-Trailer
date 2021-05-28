import React, { useState, useEffect } from 'react';
import axios from "./axios";
import './Row.css'
import genres from './genre'
import {
    BrowserRouter as Router,
    Link,
    useHistory
} from "react-router-dom";
import { useStateValue } from './StateProvider';
// import { Backdrop, ButtonBase } from '@material-ui/core';
// import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { Button } from '@material-ui/core';
// import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';


function Row({ title, fetchUrl, isLargeRow }) {
    const useStyles = makeStyles((theme) => ({
        backdrop: {
            zIndex: theme.zIndex.drawer + 100,
            color: '#fff',
        },
    }));

    // For image loading
    const base_url = 'https://image.tmdb.org/t/p/original/';
    let history = useHistory();
    const [movies, setMovies] = useState([]);
    const [{ id, movie }, dispatch] = useStateValue();
    // const [page, setPage] = useState(1);
    // console.log(link);

    useEffect(() => {

        async function fetchData() {
            // console.log(page);
            // fetchUrl = fetchUrl + '&page=' + page
            console.log(fetchUrl);
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    // console.log(fetchUrl);
    // console.log(movies);
    // console.log(genres[28])
    const handleClick = (movie) => {
        history.push(`/movie/${movie.id}`)
        // navigate(`/movie/${id}`)
        console.log(movie);
        dispatch({
            type: 'GET_ID',
            id: movie.id
        })
    }
    // dispatch({
    //     type: 'GET_TITLE',
    //     title: movie?.title || movie?.name
    // })
    // dispatch({
    //     type: 'GET_BACKDROP',
    //     backdrop: movie.backdrop_path
    // })
    // dispatch({
    //     type: 'GET_GENRE',
    //     genre: movie.genre_ids
    // })
    // dispatch({
    //     type: 'IS_ADULT',
    //     adult: movie.adult
    // })
    // dispatch({
    //     type: 'GET_LANGUAGE',
    //     language: movie.original_language
    // })
    // dispatch({
    //     type: 'GET_OVERVIEW',
    //     overview: movie.overview
    // })
    // dispatch({
    //     type: 'GET_POPULARITY',
    //     popularity: movie.popularity
    // })
    // dispatch({
    //     type: 'GET_POSTER',
    //     poster: movie.poster_path
    // })
    // dispatch({
    //     type: 'GET_RELEASE DATE',
    //     release_date: movie.release_date
    // })
    // dispatch({
    //     type: 'GET_RATING',
    //     rating: movie.vote_average
    // })
    // dispatch({
    //     type: 'GET_COUNT',
    //     count: movie.vote_count
    // })


    const classes = useStyles();
    // const handleButtonClick = (e) => {
    //     setPage(e);
    //     history.push(`/${link}/${e}`)
    // }
    // console.log(page);
    return (
        <div className="row">
            <h2 className="heading">{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => (
                    (movie.poster_path === null || movie.backdrop_path === null) ? "" : (
                        <div key={movie.id} className="movie">
                            <Router>
                                {/* <a href={`/movie/${movie.id}`}> */}
                                <Link to={`/movie/${movie.id}`}>
                                    <img onClick={() => { handleClick(movie) }} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={base_url + (isLargeRow ? movie.poster_path : movie.backdrop_path)} alt={movie.title || movie.name} />
                                    <div className="rating">
                                        <div className="title">{movie?.title || movie?.name}</div>
                                        <div className="info">
                                            <div className="genres">
                                                {movie.genre_ids.map((ids) => (
                                                    <span className="genre" key={ids}>{genres[ids]} </span>
                                                ))}
                                            </div>
                                            <div className="mov-rate">
                                                {movie.vote_average}
                                            </div>
                                        </div>
                                    </div>
                                    {/* </a> */}
                                </Link>
                            </Router>
                        </div>
                    )
                ))}
            </div>
            {/* {movies === null ? <Backdrop className={classes.backdrop} open>
                <CircularProgress color="inherit" />
            </Backdrop> : ""} */}
            {/* <div className="page-toggle"> */}
            {/* <Link to={`${link}/1`}> */}
            {/* <button className="page-but" value={1} onClick={(e) => handleButtonClick(e.target.value)}>1</button> */}
            {/* </Link> */}
            {/* <Link to={`/${link}/${page}`}> */}
            {/* <button className="page-but" value={2} onClick={(e) => handleButtonClick(e.target.value)}>2</button> */}
            {/* </Link> */}
            {/* <Link to={`/${link}/${page}`}> */}
            {/* <button className="page-but" value={3} onClick={(e) => handleButtonClick(e.target.value)}>3</button> */}
            {/* </Link> */}
            {/* <Link to={`/${link}/${page}`}> */}
            {/* <button className="page-but" value={4} onClick={(e) => handleButtonClick(e.target.value)}>4</button> */}
            {/* </Link> */}
            {/* <Link to={`/${link}/${page}`}> */}
            {/* <button className="page-but" value={5} onClick={(e) => handleButtonClick(e.target.value)}>5</button> */}
            {/* </Link> */}
            {/* <Link to={`/${link}/${page}`}> */}
            {/* <button className="page-but" value={6} onClick={(e) => handleButtonClick(e.target.value)}>6</button> */}
            {/* </Link> */}
            {/* <Link to={`/${link}/${page}`}> */}
            {/* <button className="page-but" value={7} onClick={(e) => handleButtonClick(e.target.value)}>7</button> */}
            {/* </Link> */}
            {/* <Link to={`/${link}/${page}`}> */}
            {/* <button className="page-but" value={8} onClick={(e) => handleButtonClick(e.target.value)}>8</button> */}
            {/* </Link> */}
            {/* <Link to={`/${link}/${page}`}> */}
            {/* <button className="page-but" value={9} onClick={(e) => handleButtonClick(e.target.value)}>9</button> */}
            {/* </Link> */}
            {/* <Link to={`/${link}/${page}`}> */}
            {/* <button className="page-but" value={10} onClick={(e) => handleButtonClick(e.target.value)}>10</button> */}
            {/* </Link> */}
            {/* </div> */}
        </div >
    );
}

export default Row;