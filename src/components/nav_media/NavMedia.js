import './NavMedia.css'
export default function NavMedia() {
  return(
    <nav className={'media-box'}>
      <div className={'nav-title'}>MEDIA</div>
      <ul>
        <li className={'clickNavItem'}>Movies</li>
        <li>TV Shows</li>
        <li>Music</li>
        <li>Audiobooks</li>
        <li>Games</li>
        <li>Apps</li>
        <li>Updates<span className={'updates'}>5</span></li>
      </ul>
    </nav>
  )
}