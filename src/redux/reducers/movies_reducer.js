import {
  LOAD_GENRES,
  LOAD_MOVIES,
  GET_HDR_4K,
  GET_DESCRIPTION,
  LOAD_WEEK_MOVIES,
  LOAD_NEW_MOVIE,
  LOAD_BEST_WEEK_MOVIE, LOAD_GENRES_LIST
} from "../actions/actions";

let initialState = {
  movies:[],
  genres:[],
  moviesHDR:[],
  description: null,
  moviesWeek:[],
  newMovie:[],
  bestWeekMovies:[],
  genresList:[]
};
const reducer = (state = initialState,action) => {
  switch (action.type){
    case LOAD_MOVIES:
      let prepareArr = [...action.payload].slice(0,6);
      return {...state, movies: [...prepareArr]}
    
    case GET_HDR_4K:
      let hdrArr = [...action.payload].slice(6,9);
      return {...state, moviesHDR: [...hdrArr]}
    
    case LOAD_GENRES:
      return {...state, genres: [...action.payload]}
    
    case GET_DESCRIPTION:
      let defaultObj = action.payload;
      return {...state,description: {...defaultObj}}
    
    case LOAD_WEEK_MOVIES:
      let prepareWeekArr = [...action.payload].slice(9,15);
      return {...state, moviesWeek:[...prepareWeekArr]}
    
    case LOAD_NEW_MOVIE:
      let newMovie = [...action.payload].slice(16,17);
      return {...state, newMovie:[...newMovie]}
    
    case LOAD_BEST_WEEK_MOVIE:
      let sortArr = [...action.payload].sort(
        function(a, b) {
        return  b.vote_count - a.vote_count
        }
      )
      let prepareBestMovies = sortArr.slice(0,9)
      return {...state, bestWeekMovies:[...prepareBestMovies]}
    
    case LOAD_GENRES_LIST:
      console.log(action.payload);
      return {...state, genresList: [...action.payload]}
    
    default:
      return state;
  }

}
export {reducer}