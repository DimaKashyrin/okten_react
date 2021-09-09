import axios from 'axios'
import {
  loadGenres,
  loadMovies,
  getHdr4k,
  getDescription,
  loadWeekMovies,
  loadNewMovie,
  loadBestWeekMovies,
  loadGenresList
} from "../redux/actions/actionCreators";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers:{
    Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWQ3ZTNkMWExMDI2OTkwODlkMDg1OTNlN2ExYTMwOSIsInN1YiI6IjYxMmY1NTdkYjg0Y2RkMDA0M2UwZDVmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UJHc2kOE6ZK9LsdcGliVCZdIl5XDobSyczwDd7TS7eI'
  }
})
const loadMoviesServer = () => async (dispatch) => {
  const response = await instance.get('/discover/movie')
  dispatch(loadMovies(response.data.results))
}
const loadMoviesBy4k = () => async (dispatch) => {
  const response = await instance.get('/discover/movie')
  dispatch(getHdr4k(response.data.results))
}
const loadMoviesDescription = (params) => async (dispatch) => {
  const {data:{results}} = await instance.get('/discover/movie')
  const {data:{genres}} = await instance.get('/genre/movie/list')
  let selectedMovie = results.find(item => item.id === +params);
  let prepareObj = {...selectedMovie,genres:[]};
  genres.forEach(item => {
    if(selectedMovie.genre_ids[0] === item.id){
      prepareObj.genres.push(item.name)
    }else if(selectedMovie.genre_ids[1] === item.id){
      prepareObj.genres.push(item.name)
    }else if(selectedMovie.genre_ids[2] === item.id){
      prepareObj.genres.push(item.name)
    }
  })
  dispatch(getDescription(prepareObj));
}

const loadGenresServer = () => async (dispatch) => {
  const response = await instance.get('/genre/movie/list')
  dispatch(loadGenres(response.data.genres))
}
const getWeekMovies = () => async (dispatch) => {
  const response = await instance.get('/discover/movie')
  dispatch(loadWeekMovies(response.data.results))
}
const getNewMovie = () => async (dispatch) => {
  const response = await instance.get('/discover/movie')
  dispatch(loadNewMovie(response.data.results))
}
const getBestWeekMovies = () => async (dispatch) => {
  const response = await instance.get('/discover/movie')
  dispatch(loadBestWeekMovies(response.data.results))
}
const getGenresList = () => async (dispatch) => {
  const response = await instance.get('/genre/movie/list')
  dispatch(loadGenresList(response.data.genres))
}
export {
  loadMoviesServer,
  loadGenresServer,
  loadMoviesBy4k,
  loadMoviesDescription,
  getWeekMovies,
  getNewMovie,
  getBestWeekMovies,
  getGenresList
}