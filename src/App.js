import {useReducer} from "react";
import reducer from "./reducers/reducer";

function App() {

    let [{a,b,c},dispatch] = useReducer(reducer, {a:0,b:0,c:0});

    return (
          <div>
                <h1> Object A  ==>  value =  {a}</h1>
                <button onClick={() => dispatch({obj:'a', act:'+'})}>increment +5</button>
                <button onClick={() => dispatch({obj:'a', act:'-'})}>decrement -5</button>
                <h1>Object B ==>  value =  {b}</h1>
                <button onClick={() => dispatch({obj:'b', act:'+'})}>increment +10</button>
                <button onClick={() => dispatch({obj:'b', act:'-'})}>decrement -10</button>
                <h1>Object C ==>  value =  {c}</h1>
                <button onClick={() => dispatch({obj:'c', act:'+'})}>increment +20</button>
                <button onClick={() => dispatch({obj:'c', act:'-'})}>decrement -20</button>
          </div>
    );
}

export default App;

//task
// стоврити об'єкт {a:0,b:0,c:0}
// Стоврити 6 кнопок.
//     по дві на кожен з параметрів об'єкту.
// одна кнопка збільшує значення , інша зменшує
// логіку реалізувати через reducer