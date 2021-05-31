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
import { makeStyles } from '@material-ui/core/styles';


function Row({ title, fetchUrl, isLargeRow }) {
    // For image loading
    const base_url = 'https://image.tmdb.org/t/p/original/';
    let history = useHistory();
    const [movies, setMovies] = useState([]);
    const [{ id, movie }, dispatch] = useStateValue();

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    const handleClick = (movie) => {
        history.push(`/movie/${movie.id}`)
        console.log(movie);
        dispatch({
            type: 'GET_ID',
            id: movie.id
        })
    }
    return (
        <div className="row">
            <h2 className="heading">{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => (
                    (movie.poster_path === null || movie.backdrop_path === null) ? "" : (
                        <div key={movie.id} className="movie">
                            <Router>
                                <a href={`/movie/${movie.id}`}>
                                {/* <Link to={`/movie/${movie.id}`}> */}
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
                                    </a>
                                {/* </Link> */}
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