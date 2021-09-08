import './Header.css'
import player from '../../images/player.png';
import GenresList from "../genres_list/GenresList";
export default function Header(){
  
  return(
    <header className={'header-box'}>
      <div className={'search-box'}>
        <form className={'search-form'}>
          
          <div className={'select-box'}>
            <GenresList/>
            <select className={'search-selected'}>
              <option>All time</option>
              <option value="1">day</option>
              <option value="2">week</option>
              <option value="3">month</option>
              <option value="4">year</option>
            </select>
            
          </div>
          
          <div className={'search-input-box'}>
            <input type="text" placeholder=' &#128269;  Search your interesting...'/>
          </div>
          
        </form>
      </div>
      <div className={'player-box'}>
         <div className={'img-player'}>
           <img src={player} alt="plug"/>
         </div>
      </div>
    </header>
  )

}