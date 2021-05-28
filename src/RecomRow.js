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
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };
    return (
        <div className="recomrow">
            <h2 className="heading">{title}</h2>
            <div className="recomrow_posters">
                {movies.map((movie) => (
                    <div key={movie.id} className="recommovie">
                        <Router >
                            {/* <Router forceRefresh={true}> */}
                            {/* <a href={`/movie/${movie.id}`}> */}
                            {/* <Carousel activeIndex={index} onSelect={handleSelect}> */}
                            <Link to={`/movie/${movie.id}`}>
                                {/* <Carousel.Item> */}
                                <img onClick={() => { handleClick(movie) }} className="recom_row" src={base_url + movie.backdrop_path} alt={movie.title || movie.name} />

                                {/* <Carousel.Caption> */}
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
                                {/* </Carousel.Caption> */}
                                {/* </Carousel.Item> */}
                                {/* </a> */}
                            </Link>
                            {/* </Carousel> */}
                        </Router>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecomRow
