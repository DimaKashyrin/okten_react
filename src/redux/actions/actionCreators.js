import {
  LOAD_MOVIES,
  LOAD_GENRES,
  GET_HDR_4K,
  GET_DESCRIPTION,
  LOAD_WEEK_MOVIES,
  LOAD_NEW_MOVIE,
  LOAD_BEST_WEEK_MOVIE,
  LOAD_GENRES_LIST
} from "./actions"

const loadMovies = (payload) => {
  return{
    type:LOAD_MOVIES,payload
  }
}
const loadGenres = (payload) => {
  return{
    type:LOAD_GENRES,payload
  }
}
const getHdr4k = (payload) => {
  return{
    type:GET_HDR_4K,payload
  }
}
const getDescription = (payload) => {

  return{
    type:GET_DESCRIPTION,payload
  }
}
const loadWeekMovies = (payload) => {
  return{
    type:LOAD_WEEK_MOVIES,payload
  }
}
const loadNewMovie = (payload) => {
  return {
    type: LOAD_NEW_MOVIE, payload
  }
}
const loadBestWeekMovies = (payload) => {
  return{
    type:LOAD_BEST_WEEK_MOVIE,payload
  }
}
const loadGenresList = (payload) => {
  console.log('flag 1')
  return{
    type:LOAD_GENRES_LIST,payload
  }
}
export {
  loadMovies,
  loadGenres,
  getHdr4k,
  getDescription,
  loadWeekMovies,
  loadNewMovie,
loadBestWeekMovies,
  loadGenresList
}