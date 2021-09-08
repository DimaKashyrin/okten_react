import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadMoviesBy4k} from "../../services/services.movies";
import HdrCard from "../hdr_4k_card/HdrCard";
import './HdrList.css';
export default function HdrList() {
  
  let {moviesHDR} = useSelector(state => state);
  let dispatch = useDispatch();
  
  useEffect(()=>{
     dispatch(loadMoviesBy4k())
  },[])
  
  return(
    <div className={'Hdr-list'}>
      {
        moviesHDR.map(value => <HdrCard item={value} key={value.id}/>)
      }
    </div>
  )
}