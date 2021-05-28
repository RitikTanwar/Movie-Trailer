export const initialState = {
    id: null,
    title: null,
    backdrop: null,
    genre: null,
    adult: null,
    language: null,
    overview: null,
    popularity: null,
    poster: null,
    release_date: null,
    rating: null,
    count: null,
    search_term: null,
    user: null
}

const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case 'GET_ID': {
            return {
                ...state,
                id: action.id
            }
        }
        case 'GET_TITLE': {
            return {
                ...state,
                title: action.title
            }
        }
        case 'GET_BACKDROP': {
            return {
                ...state,
                backdrop: action.backdrop_path
            }
        }
        case 'GET_GENRE': {
            return {
                ...state,
                genre: action.genre_ids
            }
        }
        case 'IS_ADULT': {
            return {
                ...state,
                adult: action.adult
            }
        }
        case 'GET_LANGUAGE': {
            return {
                ...state,
                language: action.original_language
            }
        } case 'GET_OVERVIEW': {
            return {
                ...state,
                overview: action.overview
            }
        } case 'GET_POPULARITY': {
            return {
                ...state,
                popularity: action.popularity
            }
        } case 'GET_POSTER': {
            return {
                ...state,
                poster: action.poster_path
            }
        }
        case 'GET_RELEASE DATE': {
            return {
                ...state,
                release_date: action.release_date
            }
        }
        case 'GET_RATING': {
            return {
                ...state,
                rating: action.rating
            }
        }
        case 'GET_COUNT': {
            return {
                ...state,
                count: action.count
            }
        }
        case 'GET_SEARCH_TERM': {
            return {
                ...state,
                search_term: action.search_term
            }
        }
        case 'SET_USER': {
            return {
                ...state,
                user: action.user
            }
        }
        default:
            return state;
    }
}
export default reducer;