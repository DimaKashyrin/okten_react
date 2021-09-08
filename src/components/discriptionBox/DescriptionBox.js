import './Description.css'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadMoviesDescription} from "../../services/services.movies";
import {useSelector} from "react-redux";
import DescriptionCard from "../description_card/DescriptionCard";

export default function DescriptionBox({match:{params}}) {
  
  let dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loadMoviesDescription(params))
  },[params])
  
  let {description} = useSelector(state => state);
  return(
   <div>
     {
        description &&  <DescriptionCard item={description} />
     }
   </div>
  )
}
