import './App.css';
import Users from "./components/users/Users";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={''}>
        <div className={'main-menu'}>
            <Link to={'/'}>reset</Link>
            <Link to={'/users'}>USERS</Link>
            <Link to={'/posts'}>POSTS</Link>
        </div>
        <div>
            <Route path={'/users'} component={Users}/>
        </div>
      </div>
    </Router>
  );
}

export default App;


// Є дві лінки
// /users
// /posts
//
// /users - робить все те, що було на занятті останнім способом (через кнопку та ддатковий запит на сервер)
//
// /posts
// Отримує posts з placeholder, виводить їх всі.
//     Біля кожного поста зробити лінку (не конопку) яка буде вести на детальну інформацію поста.
//     Детальну інформацію отримувати через history.state