import React, { useEffect, useState } from 'react'
import './Movie.css'
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { Button, } from '@material-ui/core';
import genres from './genre';
import LanguageIcon from '@material-ui/icons/Language';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PollIcon from '@material-ui/icons/Poll';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import axios from './axios';
import { useParams, useHistory } from 'react-router-dom';
import Actors from './Actors'
import Recommended from './Recommended'
import MoneyIcon from '@material-ui/icons/Money';
import TimerIcon from '@material-ui/icons/Timer';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import numeral from 'numeral';

function Movie({ movid, movtitle, backdrop_path, genre, adult, language, overview, popularity, poster, release_date, rating, count }) {
    // function Movie() {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [trailerUrl, setTrailerUrl] = useState('')
    const [query, setQuery] = useState(movid);

    const search_api = `/movie/${query}?api_key=209b128cb703f61871ecb67c424d54c1&language=en-US`
    const history = useHistory()
    useEffect(() => {
        if (id != null) setQuery(id);
        history.push(`/movie/${id}`)
        async function fetchData() {
            const request = await axios.get(search_api);
            setMovie(request.data);
            return request;
        }
        fetchData();
    }, [id]);
    const opts = {
        height: "470",
        width: "80%",
        playerVars: {
            autoplay: 1
        }
    }
    const handleClick = () => {
        const option = {
            multi: false,
            id: id,
            year: null,
            language: movie.original_language
        };
        movieTrailer(movie?.title || movie?.name || "", option)
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                // alert(urlParams);
                if (trailerUrl === urlParams.get('v')) setTrailerUrl('');
                else setTrailerUrl(urlParams.get('v'));
            }).catch(err => console.log(err));
    }
    return (
        <div className="moviePage"
            // style={{ background: `url(${base_url + movie.backdrop_path})`, width: 1600, height: 960 }}
            style={{ backgroundColor: "black" }}
        >
            <img className="backImage" src={base_url + movie.backdrop_path} />
            <div >
                <div className="movPage-body" >
                    <div className="mov-top">
                        <div className="movPoster">
                            <img className="mov-poster" src={base_url + movie.poster_path} alt={movie.title + 'poster'} />
                            <div className="watch_trailer">
                                <div className="buttons">
                                    <Button onClick={() => handleClick()} className="watch_but">
                                        Watch trailer
                                    </Button>
                                </div>
                                <div className="cl_but">
                                    <Button onClick={() => handleClick()} className="close_but">
                                        Close trailer
                        </Button>
                                </div>
                            </div>
                        </div>
                        <div className="mov-card">
                            {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />} */}
                            <div className="movInfo">
                                <div className="infoTop">
                                    <div className="mov_name">
                                        {movie?.title || movie?.name}
                                    </div>
                                    <div className="mov_rating">
                                        {movie?.vote_average}
                                    </div>
                                </div>
                                <div className="infoMid">
                                    <div className="mov_overview">
                                        {movie?.overview}
                                    </div>

                                    <div className="mov_genres">
                                        {(movie?.genres?.length > 1 ? "Genres : " : "Genre : ")}
                                        {(movie?.genres?.map((idx) => (
                                            idx.name != "" ? <span className="mov_genre" key={idx.id}>{idx.name} </span> : ""
                                        ))
                                        )}
                                    </div>
                                    <div class="certi">
                                        {movie?.adult === false ? "U/A" : "A"}
                                    </div>
                                    <div className="vote_count">
                                        <ThumbUpIcon /> Total Votes:{movie?.votes_count}
                                    </div>
                                    <div className="language">
                                        <LanguageIcon />Original Language:{movie?.original_language}
                                    </div>
                                    <div className="popularity">
                                        <PollIcon />Popularity:{movie?.popularity}
                                    </div>
                                </div>
                                <div className="infoBottom">
                                    <div className="release_date">
                                        <AccessTimeIcon />Release Date:{movie?.release_date}
                                    </div>
                                    <div className="budget">
                                        <MoneyIcon /> Budget: {movie.budget != 0 ? '$' + numeral(movie.budget).format(0, 0) : 'N/A'}
                                    </div>
                                    <div className="duration">
                                        <TimerIcon /> Duraton:{movie.runtime != 0 ? movie.runtime + ' min' : 'N/A'}
                                    </div>
                                    <div className="revenue">
                                        <MonetizationOnOutlinedIcon /> Revenue:{movie.revenue != 0 ? '$' + numeral(movie.revenue).format(0, 0) : 'N/A'}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trailer">
                            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
                        </div>
                    </div>
                    <div className="bottom_Page">
                        <div className="actor">
                            <h1>
                                Cast
                            </h1>
                            <Actors id={movie.id} />
                        </div>
                        <div className="recommended">
                            <Recommended id={movie.id} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Movie;
