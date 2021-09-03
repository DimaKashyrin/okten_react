import {useEffect} from "react";
import {loadGenresServer, loadMoviesServer} from "../../services/services.movies";
import {useDispatch, useSelector} from "react-redux";

export default function MoviesList() {
  let state = useSelector(state => state)
  let dispatch = useDispatch()
  useEffect(()=> {
    dispatch(loadMoviesServer())
  },[])
  useEffect(()=>{
    dispatch(loadGenresServer())
  },[])
  console.log(state)
  return(
    <div>
    
    </div>
  )
}