import {Link} from "react-router-dom";

export function MoviesWeekCard({item:{poster_path, title,id}}) {
  let posterImg = `https://image.tmdb.org/t/p/w400/${poster_path}`;
  return(
    <Link to={'/description/'+ id} className={'card-movies'}>
      <div className={'card-img-box'}>
        <img className={'post-img'} src={posterImg} alt="post image"/>
      </div>
      <div className={'card-title'}>{title}</div>
    </Link>
  )
}