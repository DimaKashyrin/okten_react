import {createRef, useEffect, useState} from "react";
import {getCars, updateCar} from "../service/service.form";
import './SelectForm.css'
import Option from "./option/Option";

export default function SelectForm() {

    let [cars, setCars] =useState([]);

    useEffect(()=> {
        getCars().then(value => setCars([...value]))
    },[])

    let form = createRef();

    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');

    let [carId,setCarID] = useState('');

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

        let editCar = {model,price,year};
        updateCar(carId,editCar);

        setModel(form.current.model.value = '');
        setPrice(form.current.price.value = '');
        setYear(form.current.year.value = '');
    }

    let findCar = (findCar) => {

        setModel(form.current.model.value = findCar.model);
        setPrice(form.current.price.value = findCar.price);
        setYear(form.current.year.value = findCar.year);

        setCarID(findCar.id);

    };

    let onChange = (e) => {
        let chooseId = +(e.target.value);
        let chooseCar = cars.find((value) => value.id === chooseId);
        findCar(chooseCar);

    }

    return(
        <div className={'wrap-forms'}>

            <form className={'selForm'}>
                <select onChange={onChange}>
                    <option defaultValue={true} >CHOOSE CAR</option>
                    {
                        cars.map(value => <Option
                            item={value}
                            key={value.id}
                        />)
                    }

                </select>
            </form>

            <form onSubmit={onSubmitForm} ref={form}>
                <fieldset>
                    <legend>&nbsp; UPDATE CAR &nbsp;</legend>
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
                    <div> iD # {carId}</div>
                    <input type="submit" value={'edit'}/>
                </fieldset>
            </form>
        </div>
    )
}