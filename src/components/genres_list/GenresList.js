import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getGenresList} from "../../services/services.movies";
import Genre from "../genre/Genre";

export default function GenresList() {
  let {genresList} = useSelector(state => state);
  let dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getGenresList())
  },[])
  return(
    <select name={'time'} id="#" className={'search-selected'}>
      <option value="" defaultValue>Genres</option>
      {
        genresList.map(value => <Genre item={value} key={value.id}/>)
      }
    </select>
  )
}