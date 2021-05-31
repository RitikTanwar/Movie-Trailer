{/* <Row title="Most Popular" fetchUrl={requests.fetchByPopularity} /> */ }
{/* <Row title="Latest" fetchUrl={requests.fetchLatest} isLargeRow={true} /> */ }
{/* <Row title="Latest" fetchUrl={requests.fetchNowPlaying} />
            <Row title="" fetchUrl={requests.fetchUpcoming} /> */}
{/* <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Netflix Originals2" fetchUrl={requests.fetchNetflixOriginals2} /> */}
{/* <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
            <Row title="Documentries2" fetchUrl={requests.fetchDocumentaries2} /> */}

<div className="leftBody">
      <Link to="/topRated">
            {/* <a href="/topRated"> */}
            <div className="typepage">Top Rated</div>
      </Link>
      <Link to="/latest">
            {/* </a> */}
            {/* <a href="/latest"> */}
            <div className="typepage">Latest</div>
      </Link>
      {/* <Link to="/netflix"> */}
      {/* </a> */}
      {/* <a href="/netflix"> */}
      {/* <div className="typepage">Netflix Originals</div> */}
      {/* </Link> */}
      <Link to="/action">
            {/* </a> */}
            {/* <a href="/action"> */}
            <div className="typepage">Action Movies</div>
      </Link>
      <Link to="/horror">
            {/* </a> */}
            {/* <a href="/horror"> */}
            <div className="typepage">Horror Movies</div>
      </Link>
      <Link to="/comedy">
            {/* </a> */}
            {/* <a href="/comedy"> */}
            <div className="typepage">Comedy Movies</div>
      </Link>
      <Link to="/romance">
            {/* </a> */}
            {/* <a href="/romance"> */}
            <div className="typepage">Romance Movies</div>
      </Link>
      {/* </a> */}
      <Link to="/documentries">
            {/* <a href="/documentries"> */}
            <div className="typepage">Documentries</div>
      </Link>
      {/* </a> */}
</div>

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