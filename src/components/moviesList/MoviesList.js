import {useEffect} from "react";
import {loadMoviesServer} from "../../services/services.movies";
import {useDispatch, useSelector} from "react-redux";
import MoviesListCard from "../moviesListCard/MoviesListCard";
import './MoviesList.css'

export default function MoviesList() {
  let {movies} = useSelector(state => state)
  let dispatch = useDispatch()
  useEffect(()=> {
    dispatch(loadMoviesServer())
  },[])
  return(
    <div className={'trending-box'}>
      <div className={'trending-title'}>
        <span className={'title-movies-list'}>Trending & Noteworthy</span>
        <a href="#">See all</a>
      </div>
      <div className={'trending-list'}>
        {
          movies.map(value => <MoviesListCard item={value} key={value.id}/>)
        }
      </div>
      </div>
  )
}