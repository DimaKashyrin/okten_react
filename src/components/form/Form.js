import './Form.css';
import {createRef, useState} from "react";
import {addCar} from "../service/service.form";

export default function Form() {

    let form = createRef();

    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');

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

        let newCar = {model,price,year};
        addCar(newCar);

        setModel(form.current.model.value = '');
        setPrice(form.current.price.value = '');
        setYear(form.current.year.value = '');

    }

    return(
        <div>
            <form onSubmit={onSubmitForm} ref={form}>
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
        </div>
    )
}