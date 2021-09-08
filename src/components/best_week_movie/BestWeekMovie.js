import './BestWeekMovie.css'
import {Link} from "react-router-dom";

export default function BestWeekMovie({item:{
  id,
  title,
  vote_count
},index}) {
  return(
    <Link to={'/description/'+ id} className={'best-week-movie'}>
      <span className={'best-name-box'}>
        <span>{index + 1}</span>
        <span>{title}</span>
      </span>
      <span>{vote_count}</span>
    </Link>
  )
}