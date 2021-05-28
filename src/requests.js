const API_KEY = '209b128cb703f61871ecb67c424d54c1';
// Search API
// `https://api.themoviedb.org/3/search/company?api_key=${API_KEY}&page=1`

// baseURL: 'https://api.themoviedb.org/3'
const requests = {
    fetchByPopularity: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=3`,
    // fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=2`,
    fetchTrending: `/trending/movie/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    // fetchNetflixOriginals2: `/discover/tv?api_key=${API_KEY}&with_networks=213&page=2`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99&page`,
    fetchDocumentaries2: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99&page=2`,
};

export default requests;