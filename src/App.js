import './App.css';
import Form from "./components/form/Form";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Cars from "./components/cars/Cars";
import SelectForm from "./components/selectForm/SelectForm";
function App() {
  return (
    <Router>
        <div className={'wrap-menu'}>
            <Link to={'/'}>reset</Link>
            <Link to={'/cars'}>Cars</Link>
            <Link to={'/create-car'}>Create car</Link>
            <Link to={'/update-car'}>Update car</Link>
        </div>
        <div>
            <Route path={'/cars'} render={() => <Cars/>}/>
            <Route path={'/create-car'} render={() => <Form/>}/>
            <Route path={'/update-car'} render={() => <SelectForm/>}/>
        </div>
    </Router>
  );
}

export default App;

// Є наступні лінки, та дії закріплені за ними
// /cars - отримати всі автівки та вивести їх
// /create-car - сторінка з формою створення нового авто
// Додатково
// /update-car - сторінка з двома формами - 1 форма з select, в якій  можна обрати яку автівку редагувати. Після вибору
// поточні данні про авто з'являються на другій формі, пілся редагування яких і відправки автівка оновлюється на сервері.