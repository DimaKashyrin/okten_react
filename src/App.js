import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <Router>
      <div className={'wrap-app'}>
        <Link to={'/'}>reset</Link>
        <Link to={'/users'}>Users</Link>
        <Link to={'/posts'}>Posts</Link>
        <Link to={'/comments'}>Comments</Link>
      </div>
      <div className={'wrap-list'}>
        <Route path={'/users'} render={() => <Users/>}/>
        <Route path={'/posts'} render={() => <Posts/>}/>
        <Route path={'/comments'} render={() => <Comments/>}/>
      </div>
    </Router>
  );
}

export default App;


// Є три лінки
// /users-page
// /posts-page
// /comments-page
// При кліку на відповідну лінку відбувається перехід на відповідний компонент,
//     який дістає з placeholder інформацію про відповідні стуності, та виводить їх повний список