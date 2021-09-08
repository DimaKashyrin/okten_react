import './HdrCard.css';
import {Link} from "react-router-dom";

export default function HdrCard({item:{backdrop_path,title,id}}){
  let backdropImg = `https://image.tmdb.org/t/p/w300/${backdrop_path}`
  return(
    <Link to={'/description/'+ id} className={'hdr_4k_list-card'}>
      <img  src={backdropImg} alt="img 4K"/>
      <div className={'title-4k'}>4k HDR</div>
      <div className={'title-4k-text'}>{title}</div>
    </Link>
  )
}