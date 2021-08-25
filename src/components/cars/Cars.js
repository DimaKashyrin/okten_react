import {getCars} from "../service/service.form";
import {useEffect, useState} from "react";
import Car from "../car/Car";
import './Cars.css';

export default function Cars() {

    let [cars, setCars] =useState([]);

    useEffect(()=> {
        getCars().then(value => setCars([...value]))
    },[])

    return(
        <div className={'wrap-cars'}>
            {
                cars.map(value => <Car item={value} key={value.id}/>)
            }
        </div>
    )
}