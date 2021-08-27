import {useReducer} from "react";
import reducer from "./reducers/reducer";

function App() {

    let [{a},dispatch] = useReducer(reducer, {a:0});

    return (
          <div>
                <h1>'STATE' ==> value = {a}</h1>
                <button onClick={() => dispatch({obj:'1', act:'+'})}>increment +10</button>
                <button onClick={() => dispatch({obj:'1', act:'-'})}>decrement -2</button>
          </div>
    );
}

export default App;

//task
// є об'єкт, значення якого 0
// Стоврити 2 кнопки.
//     Перша збільшує   значення на 10
// Друга зменшує на 2.
//
// Зміну стану та виведення реалізувати через reducer