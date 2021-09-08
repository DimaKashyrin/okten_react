import './NewMovieCard.css';
export function NewMovieCard({item:{
  backdrop_path,
  title,
  release_date,
  overview
}}) {
  let url = `https://image.tmdb.org/t/p/w300/${backdrop_path}`
  return(
    <div className={'new-movie-card'}>
      <div className={'img-box'}>
        <img src={url} alt="image"/>
        <div className={'title-new-movie-position'}>{title}</div>
        <div className={'release-new-movie-position'}>{release_date}</div>
        <div className={'btn-play'}>&#9205;</div>
      </div>
      <div className={'text-new-movie'}>{overview}</div>
    </div>
  )
}