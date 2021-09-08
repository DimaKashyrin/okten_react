import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getNewMovie} from "../../services/services.movies";
import {NewMovieCard} from "../new_movie_card/NewMovieCard";

export default function NewMovie(){
  let {newMovie} = useSelector(state => state)
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getNewMovie())
  },[])
  return(
    <div>
      <div className={'trending-title'}>
        <span className={'title-movies-list'}>What's New</span>
      </div>
      <div>
        {
          newMovie.map(value => <NewMovieCard item={value} key={value.id}/>)
        }
      </div>
    </div>
  )
}