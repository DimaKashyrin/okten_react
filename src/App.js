import './App.css';
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <div>
      <Posts/>
      <Comments/>
    </div>
  );
}
export default App;

//task
// 1
// Отримати всі пости з json placeholder та вивести їх.
//     до кожного поста зробити кнопку при натисканні якої
// виводиться біль детальна інформація про пост в середині Posts компоненти
//
// 2
// Отримати всі коментарі з json placeholder та вивести їх.
//     до кожного поста зробити кнопку при натисканні якої
// виводиться біль детальна інформація про коментар в середині Comments компоненти