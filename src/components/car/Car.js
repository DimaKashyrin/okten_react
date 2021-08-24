import './Car.css'
export default function Car({
    // item,
    item:{id,model,price,year}})
    // selectedCarDel,
    // selectedCarEdit},

{
    // let clickDel = () => {
    //     return selectedCarDel(id);
    // }
    // let clickEdit = () => {
    //     return selectedCarEdit(item);
    // }

    return(
        <div className={'car-card'}>
            <div className={'title'}>iD # {id}</div>
            <div className={'car-inform-box'}>
                <div>model: <strong>{model}</strong></div>
                <div>price: <strong>{price} $</strong></div>
                <div>year: <strong>{year}</strong></div>
            </div>

            {/*<div className={'btn-box'}>*/}
            {/*    <button onClick={clickEdit}>edit</button>*/}

            {/*    <button onClick={clickDel}>delete</button>*/}
            {/*</div>*/}
        </div>
    )

}