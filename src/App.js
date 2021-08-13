import './App.css';
import Users from "./components/users/Users";
import {OneUser} from "./components/oneUser/OneUser";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import OnePost from "./components/onePost/OnePost";
import OneComment from "./components/oneComment/OneComment";

function App() {
  return (

    <div>

      <h2>USERS</h2>
      <Users/>
      <div className={'sub-task'}>one user</div>
      <OneUser/>
      <h2>POSTS</h2>
      <Posts/>
      <div className={'sub-task'}>one post</div>
      <OnePost/>
      <h2>COMMENTS</h2>
      <Comments/>
      <div className={'sub-task'}>one comment</div>
      <OneComment/>

    </div>

  );
}

export default App;








// 1 - Коротко : отримати всіх юзерів з плейсхолдеру, та відтворити на сторіці
// створити сервіс (service.js) роботи  з users сутностями  з jsonplaceholer (getUsers(),getUser(id)).
//     Використати fetch / axios на вибір
// Створити компонент Users
// На  рівні Users, за допомоги відповідного сервісу,  отримати всі данні та вивести їх використовуючи відповідні компоненти
// Створити компонент User який характеризує окремий об'єкт з масиву.
// Ієрархія компонентів :
//     App-Users->User