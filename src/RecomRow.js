import React, { useState, useEffect } from 'react';
import axios from "./axios";
import './recomrow.css'
// import './Row'
import genres from './genre'
import {
    BrowserRouter as Router,
    Link,
    useHistory
} from "react-router-dom";
import { useStateValue } from './StateProvider';
// import { Carousel } from 'react-bootstrap'

function RecomRow({ title = "Recommended", fetchUrl }) {
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
    }, [fetchUrl])
    const handleClick = (movie) => {
        history.push(`/movie/${movie.id}`)
        console.log(movie);
        dispatch({
            type: 'GET_ID',
            id: movie.id
        })
    }
    return (
        <div className="recomrow">
            <h2 className="heading">{title}</h2>
            <div className="recomrow_posters">
                {movies.map((movie) => (
                    <div key={movie.id} className="recommovie">
                        <Router >
                            <Link to={`/movie/${movie.id}`}>
                                <img onClick={() => { handleClick(movie) }} className="recom_row" src={base_url + movie.backdrop_path} alt={movie.title || movie.name} />
                                <div className="recomrating">
                                    <div className="recomtitle">{movie?.title || movie?.name}</div>
                                    <div className="recominfo">
                                        <div className="recomgenres">
                                            {movie.genre_ids.map((ids) => (
                                                <span className="recomgenre" key={ids}>{genres[ids]} </span>
                                            ))}
                                        </div>
                                        <div className="recommov-rate">
                                            {movie.vote_average}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Router>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecomRow
