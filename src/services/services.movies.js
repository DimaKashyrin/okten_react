import axios from 'axios'
import {loadGenres, loadMovies} from "../redux/actions/actionCreators";

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
const loadGenresServer = () => async (dispatch) => {
  const response = await instance.get('/genre/movie/list')
  dispatch(loadGenres(response.data.genres))
}

export {loadMoviesServer,loadGenresServer}