import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className={'main-menu'}>
                <Link to={'/'}>reset</Link>
                <Link to={'/users'}>USERS</Link>
                <Link to={'/posts'}>POSTS</Link>
            </div>
            <div>
                <Switch>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/posts'} component={Posts}/>
                </Switch>
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