import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getWeekMovies} from "../../services/services.movies";
import {MoviesWeekCard} from "../movies_week_card/MoviesWeekCard";

export default function MoviesWeekList(){
  let {moviesWeek} = useSelector(state => state)
  let dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getWeekMovies())
  },[])
  return(
    <div className={'trending-box'}>
      <div className={'trending-title'}>
        <span className={'title-movies-list'}>Top Rated This Week</span>
        <a href="#">See all</a>
      </div>
      <div className={'trending-list'}>
        {
          moviesWeek.map(value => <MoviesWeekCard item={value} key={value.id}/>)
        }
      </div>
    </div>
  )
}