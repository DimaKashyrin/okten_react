export default function DescriptionCard(
  {item:{
    backdrop_path,
    title,
    vote_average,
    vote_count,
    release_date,
    genres,
    overview,
  }}
) {
  let url = `https://image.tmdb.org/t/p/w400/${backdrop_path}`
  return(
    <div className={'description'}>
      <div className={'description-image-box'}>
        <img src={url} alt="image"/>
      </div>
      <div className={'description-body'}>
        <div className={'description-title'}>
          <span className={'description-name'}>
            {title}
          </span>
          <span className={'description-rating'}>{vote_average}
            <span className={'description-max-rating'}> / 10</span>
          </span>
        </div>
        <div className={'description-sub-inform'}>
          <span>&#9825; {vote_count} </span>
          <span>{release_date}</span>
          <span className={'genres-box'}>
            <span>{genres[0]}</span>
            <span>{genres[1]}</span>
            <span>{genres[2]}</span>
          </span>
        </div>
        <div className={'description-text'}>
          {overview}
        </div>
        <div className={'btn-box'}>
          <div className={'btn-buy'}>$ 19.99 Buy </div>
        </div>
      </div>
    </div>
  )
}