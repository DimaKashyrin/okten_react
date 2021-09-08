import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBestWeekMovies} from "../../services/services.movies";
import BestWeekMovie from "../best_week_movie/BestWeekMovie";
import './BestWeekMovies.css';

export function BestWeekMovies() {
  let {bestWeekMovies} = useSelector(state => state)
  let dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getBestWeekMovies())
  },[])
  return(
    <div>
      <div className={'best-list-title'}>Bestselling This Week</div>
      <div className={'best-week-list'}>
        {
          bestWeekMovies.map((value,index) => <BestWeekMovie item={value} index={index} key={value.id}/>)
        }
      </div>
    </div>
  )
}