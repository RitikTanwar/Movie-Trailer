import React from 'react'
import Row from './Row'
import requests from './requests'

function Typepage({ title, link }) {
    return (
        <div>
            <Row title={title} link={link} fetchUrl={title === "Top Rated" ? requests.fetchTopRated : title === "Latest Movies" ? requests.fetchUpcoming : title === "Action Movies" ? requests.fetchActionMovies : title === "Romance Movies" ? requests.fetchRomanceMovies : title === "Horror Movies" ? requests.fetchHorrorMovies : title === "Netflix Originals" ? requests.fetchNetflixOriginals : title === "Comedy Movies" ? requests.fetchComedyMovies : requests.fetchDocumentaries} isLargeRow={true} />
        </div>
    )
}

export default Typepage;
