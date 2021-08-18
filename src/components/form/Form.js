import './Form.css'
import {useState} from "react";
import {addCar} from "../service/sevice.form";
import Cars from "../cars/Cars";

export default function Form() {
    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');
    let [car,setCar] = useState({});

    let onInputtingModel = (e) => {
        setModel(e.target.value);
    }
    let onInputtingPrice = (e) => {
        setPrice(e.target.value);

    }
    let onInputtingYear = (e) => {
        setYear(e.target.value);

    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        let tempCar = {model,price,year};
        car=tempCar
        setCar({tempCar});
        addCar(car);
    }
    return(
        <div>
            <form onSubmit={onSubmitForm}>
                <fieldset>
                    <legend>&nbsp; Add car &nbsp;</legend>
                    <input
                        type="text"
                        name={'model'}
                        placeholder={'model'}
                        value={model}
                        onInput={onInputtingModel}
                    />
                    <input
                        type="number"
                        name={'price'}
                        placeholder={'price'}
                        value={price}
                        onInput={onInputtingPrice}
                    />
                    <input
                        type="number"
                        name={'year'}
                        placeholder={'year'}
                        value={year}
                        onInput={onInputtingYear}
                    />
                    <input type="submit" value={'add'}/>
                </fieldset>
            </form>
            <Cars/>
        </div>
    )
}