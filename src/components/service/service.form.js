const url = 'http://91.201.233.14/api/v1/cars';

const addCar = ({model,price,year}) => {
    fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify({model,price,year}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

const getCars = () => {
   return  fetch(`${url}`)
        .then(value => value.json())
}
const delCar = (id) => {
     fetch(`${url}/${id}`, {
        method: 'DELETE'
   }).then();
}

const updateCar = ({id},{model,price,year}) => {
    fetch(`${url}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            model: model,
            price:price,
            year:year
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

}
export {addCar, getCars, delCar, updateCar}