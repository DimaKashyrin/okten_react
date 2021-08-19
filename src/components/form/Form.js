import './Form.css';
import {createRef, useState} from "react";
import {addCar,updateCar} from "../service/sevice.form";
import Cars from "../cars/Cars";


export default function Form() {

    let form = createRef();

    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');
    let [car,setCar] = useState({});
    let [editCar,setEditCar] = useState({});

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
        car=tempCar;

        if(Object.keys(editCar).length !== 0){
            updateCar(editCar,car);
            setEditCar({})
        }else {
            setCar({tempCar});
            addCar(car);
        }

        setModel(form.current.model.value = '');
        setPrice(form.current.price.value = '');
        setYear(form.current.year.value = '');

    }
    let findCar = (findCar) => {
        setModel(form.current.model.value = findCar.model);
        setPrice(form.current.price.value = findCar.price);
        setYear(form.current.year.value = findCar.year);
        setEditCar(findCar);
    };

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
            <Cars editCar={findCar}/>
        </div>
    )
}