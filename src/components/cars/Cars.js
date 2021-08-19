import {getCars, delCar} from "../service/sevice.form";
import {useEffect, useState} from "react";
import Car from "../car/Car";
import './Cars.css';

export default function Cars({editCar}) {
    let [cars, setCars] =useState([]);
    useEffect(()=> {
        getCars().then(value => setCars([...value]))
    })

    const selectedCarDel = (id) =>{
        delCar(id)
    }
    const selectedCarEdit = (car) => {
        editCar(car);
    }

    return(
        <div className={'wrap-cars'}>
            {
                cars.map(value => {
                     return (
                         <Car
                            item={value}
                            key={value.id}
                            selectedCarDel={selectedCarDel}
                            selectedCarEdit={selectedCarEdit}
                        />
                     )
                })
            }
        </div>
    )
}