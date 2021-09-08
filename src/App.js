import './App.css';
import Header from "./components/header/Header";
import MoviesList from "./components/moviesList/MoviesList";
import HdrList from "./components/hdr_4k_list/HdrList";
import DescriptionBox from "./components/discriptionBox/DescriptionBox";
import NewMovie from "./components/new_movie/NewMovie";
import MoviesWeekList from "./components/movies_week_list/MoviesWeekList";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {BestWeekMovies} from "./components/best_week_movies/BestWeekMovies";
import UserInfo from "./components/userInfo/UserInfo";
import NavMedia from "./components/nav_media/NavMedia";
import NavAccount from "./components/nav_account/NavAccount";
import NavSing from "./components/nav_sing/NavSing";
function App() {
  return (
    <Router>
      <div className={'app-wrap'}>
        <section className={'nav-section'}>
          <UserInfo/>
          <NavMedia/>
          <NavAccount/>
          <NavSing/>
        </section>
        <section className={'main-section'}>
          <Header/>
          <HdrList/>
          <div className={'centre-box'}>
            <div className={'main'}>
              <MoviesList/>
              <Switch>
                <Route path={'/description/:id'} component={DescriptionBox}/>
              </Switch>
            <MoviesWeekList/>
            </div>
            <div className={'article-box'}>
              <NewMovie/>
              <BestWeekMovies/>
              </div>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
