import './Description.css'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadMoviesDescription} from "../../services/services.movies";
import {useSelector} from "react-redux";
import DescriptionCard from "../description_card/DescriptionCard";

export default function DescriptionBox({match:{params:{id}}}) {
  let {description} = useSelector(state => state);
  let dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loadMoviesDescription(id))
  },[id])
  
  return(
   <div>
     {
        description &&  <DescriptionCard item={description} />
     }
   </div>
  )
}
